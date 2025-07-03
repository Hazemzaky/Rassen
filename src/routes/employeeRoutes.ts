import { Router } from 'express';
import * as employeeController from '../controllers/employeeController';

const router = Router();

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getEmployees);
router.get('/:id', employeeController.getEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deactivateEmployee);

export default router;