import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

library.add(faCalculator);
// Convert icons in svg
dom.i2svg();
