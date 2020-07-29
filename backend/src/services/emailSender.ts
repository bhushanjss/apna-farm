import assert from 'assert';
import { getConfig } from '../config';
import sendgridMail from '@sendgrid/mail';

if (getConfig().SENDGRID_KEY) {
  sendgridMail.setApiKey(getConfig().SENDGRID_KEY);
}

/**
 * Handles Email sending
 */
export default class EmailSender {
  templateId: string;
  variables: any;

  constructor(templateId, variables) {
    this.templateId = templateId;
    this.variables = variables;
  }

  static get TEMPLATES() {
    if (!EmailSender.isConfigured) {
      return {};
    }

    return {
      EMAIL_ADDRESS_VERIFICATION: getConfig()
        .SENDGRID_TEMPLATE_EMAIL_ADDRESS_VERIFICATION,
      INVITATION: getConfig().SENDGRID_TEMPLATE_INVITATION,
      PASSWORD_RESET: getConfig()
        .SENDGRID_TEMPLATE_PASSWORD_RESET,
    };
  }

  async sendTo(recipient) {
    if (!EmailSender.isConfigured) {
      console.error(`Email provider is not configured.`);
      return;
    }

    assert(recipient, 'to is required');
    assert(
      getConfig().SENDGRID_EMAIL_FROM,
      'SENDGRID_EMAIL_FROM is required',
    );
    assert(this.templateId, 'templateId is required');

    const msg = {
      to: recipient,
      from: getConfig().SENDGRID_EMAIL_FROM,
      templateId: this.templateId,
      dynamicTemplateData: this.variables,
    };

    return sendgridMail.send(msg);
  }

  static get isConfigured() {
    return Boolean(
      getConfig().SENDGRID_EMAIL_FROM &&
        getConfig().SENDGRID_KEY,
    );
  }
}
