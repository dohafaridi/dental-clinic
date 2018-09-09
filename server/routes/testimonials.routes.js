import { Router } from 'express';
import * as TestimonialController from '../controllers/testimonial.controller';

const router = new Router();

// Get all testimonials
router.route('/testimonials').get(TestimonialController.getTestimonials);

// Get home testimonials
router.route('/testimonials/home').get(TestimonialController.getHomeTestimonial);

// Get one testimonial by slug
router.route('/testimonials/:slug').get(TestimonialController.getTestimonial);

// Add a new Testimonial
router.route('/testimonials').post(TestimonialController.addTestimonial);

// Edit a testimonial by cuid
router.route('/testimonials/:cuid').post(TestimonialController.editTestimonial);

// Delete a testimonial by cuid
router.route('/testimonials/:cuid').delete(TestimonialController.deleteTestimonial);

export default router;
