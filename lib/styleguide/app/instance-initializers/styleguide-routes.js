import ExampleRouter from 'example/router';
import styleguideRoutes from 'example/styleguide-routes';

export function initialize() {
  ExampleRouter.map(styleguideRoutes);
}

export default {
  name: 'styleguide-routes',
  initialize,
};
