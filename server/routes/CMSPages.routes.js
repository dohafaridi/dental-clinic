import { Router } from 'express';
import * as CMSPageController from '../controllers/cmsPage.controller';

const router = new Router();

// Get all cmsPages
router.route('/cmsPages').get(CMSPageController.getCMSPages);

// Get one cmsPage by slug
router.route('/cmsPages/:slug').get(CMSPageController.getCMSPage);

// Add a new CMSPage
router.route('/cmsPages').post(CMSPageController.addCMSPage);

// Edit a cmsPage by cuid
router.route('/cmsPages/:cuid').post(CMSPageController.editCMSPage);

// Delete a cmsPage by cuid
router.route('/cmsPages/:cuid').delete(CMSPageController.deleteCMSPage);

export default router;
