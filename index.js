import $ from 'jquery';
import can from 'can';
import 'can/view/stache/';

import 'components/sc-app/';

$('body').html(can.stache('<sc-app></sc-app>')());