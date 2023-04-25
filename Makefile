all: www/wikarekare/js/wikk_params-min.js

www/wikarekare/js/wikk_params-min.js: www/wikarekare/js/wikk_params.js
	(cd www/wikarekare/js; minimise.rb wikk_params.js)
