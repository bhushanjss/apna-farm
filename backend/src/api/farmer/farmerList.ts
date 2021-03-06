import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import FarmerService from '../../services/farmerService';

export default async (req, res, next) => {
  try {
    const permissionChecker = new PermissionChecker(req);
    permissionChecker.validateHas(Permissions.values.farmerRead,);
    let query = req.query;
    await permissionChecker.currentUserRolesIds.some((role) => {
      if(role !=='admin' && role !=='researcher') {
        const currentUser = req.currentUser;
        query.filter = {...query.filter, createdById: currentUser.id}
      }
    });
    const payload = await new FarmerService(
      req,
    ).findAndCountAll(query);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
