# sass-math-pow Upgrade Guide

## 0.x to 1.0.0

This version migrates all division operations to the new `math.div()` syntax to stay compatible with Dart Sass 
(which deprecates division via `/` in 2.0). This change [breaks compatibility with Sass compilers based on LibSass 
(e.g. Node Sass)](https://sass-lang.com/documentation/breaking-changes/slash-div). Please make sure to switch to 
Dart Sass ("sass" package on npm) as your compiler.

More background: The [canonical implementation of Sass is Dart Sass](https://sass-lang.com/blog/libsass-is-deprecated), 
while LibSass/Node Sass have been deprecated since October 2020. As these versions are still widely used, any move that 
takes advantage of new features like the in-built `math` Module is a breaking change.
