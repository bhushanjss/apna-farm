import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import HistoryIcon from '@material-ui/icons/History';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import diseaseSelectors from 'src/modules/disease/diseaseSelectors';
import destroyActions from 'src/modules/disease/destroy/diseaseDestroyActions';
import destroySelectors from 'src/modules/disease/destroy/diseaseDestroySelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import ToolbarWrapper from 'src/view/shared/styles/ToolbarWrapper';

function DiseaseViewToolbar(props) {
  const [
    destroyConfirmVisible,
    setDestroyConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const id = props.match.params.id;

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToEdit = useSelector(
    diseaseSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    diseaseSelectors.selectPermissionToDestroy,
  );
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const doOpenDestroyConfirmModal = () => {
    setDestroyConfirmVisible(true);
  };

  const doCloseDestroyConfirmModal = () => {
    setDestroyConfirmVisible(false);
  };

  const doDestroy = () => {
    doCloseDestroyConfirmModal();
    dispatch(destroyActions.doDestroy(id));
  };

  return (
    <ToolbarWrapper>
      {hasPermissionToEdit && (
        <Button
          component={Link}
          to={`/disease/${id}/edit`}
          variant="contained"
          color="primary"
          type="button"
          startIcon={<EditIcon />}
          size="small"
        >
          {i18n('common.edit')}
        </Button>
      )}

      {hasPermissionToDestroy && (
        <Button
          variant="contained"
          color="primary"
          type="button"
          startIcon={<DeleteIcon />}
          disabled={destroyLoading}
          onClick={doOpenDestroyConfirmModal}
          size="small"
        >
          {i18n('common.destroy')}
        </Button>
      )}

      {hasPermissionToAuditLogs && (
        <Button
          component={Link}
          to={`/audit-logs?entityId=${encodeURIComponent(
            id,
          )}`}
          startIcon={<HistoryIcon />}
          size="small"
        >
          {i18n('auditLog.menu')}
        </Button>
      )}

      {destroyConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy()}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </ToolbarWrapper>
  );
}

export default DiseaseViewToolbar;
