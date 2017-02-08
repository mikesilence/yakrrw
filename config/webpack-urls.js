'use strict';

export default function(env) {
  return (env !== 'node') ? 'http://localhost:8050/build/' : '/build/';
}
