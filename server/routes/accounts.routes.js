import { Router } from 'express';
import * as AccountController from '../controllers/account.controller';

const router = new Router();

// Get all accounts
router.route('/accounts').get(AccountController.getAccounts);

// Get an account by patientID
router.route('/account/:patientID').get(AccountController.getAccountByPatientID);

// Check login credential
router.route('/login/:username/:password').get(AccountController.checkLoginCredential);

// Add a new account
router.route('/accounts').post(AccountController.addAccount);

// Edit an account by _id
router.route('/accounts/:_id').post(AccountController.editAccount);

export default router;
