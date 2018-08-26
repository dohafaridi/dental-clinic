import { Router } from 'express';
import * as AccountController from '../controllers/account.controller';

const router = new Router();

// Get all accounts
router.route('/accounts').get(AccountController.getAccounts);

// Get an account by patientID
router.route('/account/:patientID').get(AccountController.getAccountByPatientID);

// Add a new account
router.route('/accounts').post(AccountController.addAccount);

export default router;
