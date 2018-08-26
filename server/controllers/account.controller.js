import Account from '../models/account';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all accounts
 * @param req
 * @param res
 * @returns void
 */
export const getAccounts = (req, res) =>
  Account.find()
    .sort('-dateAdded')
    .exec(
      (err, accounts) =>
        (err ? res.status(500).send(err) : res.json({ accounts }))
    );

/**
 * Get an accounts by patientID
 * @param req
 * @param res
 * @returns void
 */
export const getAccountByPatientID = (req, res) =>
  Account.find({ patientID: req.params.patientID }).exec(
    (err, accounts) => (err ? res.status(500).send(err) : res.json({ accounts }))
  );
    
/**
 * Save an account
 * @param req
 * @param res
 * @returns void
 */
export const addAccount = (req, res) => {
  if (!req.body.account.userName || !req.body.account.password || !req.body.account.patientID) {
    res.status(403).end();
  }

  const newAccount = new Account(req.body.account);

  newAccount.userName = sanitizeHtml(newAccount.userName);
  newAccount.password = newAccount.password;

  newAccount.save(
    (err, saved) =>
      (err ? res.status(500).send(err) : res.json({ account: saved }))
  );
};
