# this is mostly deprecated as grunt should tackle this now.
# but grunt cant do the sourcemappingurl append bit yet.

java -jar build/compiler.jar \
	 --js js/libs/augment.js      \
	 --js js/libs/list.js         \
	 --js js/libs/classList.js    \
	 --js js/script.js            \
     --create_source_map ./script.min.js.map \
     --source_map_format=V3 \
     --js_output_file js/script.min.js

echo "//@ sourceMappingURL=../script.min.js.map" >> js/script.min.js
