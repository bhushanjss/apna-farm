import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/question/importer/questionImporterSelectors';
import QuestionService from 'src/modules/question/questionService';
import fields from 'src/modules/question/importer/questionImporterFields';
import { i18n } from 'src/i18n';

export default importerActions(
  'QUESTION_IMPORTER',
  selectors,
  QuestionService.import,
  fields,
  i18n('entities.question.importer.fileName'),
);
