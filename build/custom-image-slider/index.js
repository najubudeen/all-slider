/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/custom-image-slider/edit.js":
/*!*****************************************!*\
  !*** ./src/custom-image-slider/edit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/custom-image-slider/editor.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









function Edit({
  attributes,
  setAttributes
}) {
  const [allPosts, setAllPosts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [textColor, setTextColor] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("#000");
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    fetch("http://my-new-block-plugin.local/wp-json/wp/v2/posts?_embed", {
      cache: "no-store"
    }).then(response => response.json()).then(data => {
      if (data) {
        setAllPosts(data);
        return data.map(d => {
          const featuredImage = d._embedded["wp:featuredmedia"] ? d._embedded["wp:featuredmedia"][0].source_url : "";
        });
        // 	? post._embedded["wp:featuredmedia"][0].source_url
        // 	: "";
      }
    });
  }, [setAllPosts]);

  // const { sliderWidth } = attributes;
  const {
    sliderWidth,
    sliderHeight,
    content,
    textColors,
    fontSize,
    isReadOnly,
    fontFamily,
    content2,
    alignment,
    alignItems,
    justifyContent,
    textSize
  } = attributes;

  // ADDING FONT FAMILY, WITH 34 FONTS
  const fontFamilyOptions = [{
    label: "Arial",
    value: "Arial"
  }, {
    label: "Helvetica",
    value: "Helvetica"
  }, {
    label: "Times New Roman",
    value: "Times New Roman"
  }, {
    label: "Courier New",
    value: "Courier New"
  }, {
    label: "Georgia",
    value: "Georgia"
  }, {
    label: "Verdana",
    value: "Verdana"
  }, {
    label: "Tahoma",
    value: "Tahoma"
  }, {
    label: "Trebuchet MS",
    value: "Trebuchet MS"
  }, {
    label: "Comic Sans MS",
    value: "Comic Sans MS"
  }, {
    label: "Lucida Console",
    value: "Lucida Console"
  }, {
    label: "Monaco",
    value: "Monaco"
  }, {
    label: "Garamond",
    value: "Garamond"
  }, {
    label: "Impact",
    value: "Impact"
  }, {
    label: "Palatino",
    value: "Palatino"
  }, {
    label: "Century Gothic",
    value: "Century Gothic"
  }, {
    label: "Brush Script MT",
    value: "Brush Script MT"
  }, {
    label: "Cambria",
    value: "Cambria"
  }, {
    label: "Candara",
    value: "Candara"
  }, {
    label: "Consolas",
    value: "Consolas"
  }, {
    label: "Corbel",
    value: "Corbel"
  }, {
    label: "Franklin Gothic Medium",
    value: "Franklin Gothic Medium"
  }, {
    label: "Gill Sans",
    value: "Gill Sans"
  }, {
    label: "Perpetua",
    value: "Perpetua"
  }, {
    label: "Rockwell",
    value: "Rockwell"
  }, {
    label: "Segoe UI",
    value: "Segoe UI"
  }, {
    label: "Futura",
    value: "Futura"
  }, {
    label: "Calibri",
    value: "Calibri"
  }, {
    label: "Book Antiqua",
    value: "Book Antiqua"
  }, {
    label: "Lucida Bright",
    value: "Lucida Bright"
  }, {
    label: "Papyrus",
    value: "Papyrus"
  }, {
    label: "Didot",
    value: "Didot"
  }, {
    label: "French Script MT",
    value: "French Script MT"
  }, {
    label: "Herculanum",
    value: "Herculanum"
  }, {
    label: "Kohinoor Bangla",
    value: "Kohinoor Bangla"
  }];
  const selectRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const handleKeyDown = event => {
      if (event.target !== selectRef.current) return;
      const currentIndex = fontFamilyOptions.findIndex(option => option.value === fontFamily);
      let newIndex;
      if (event.key === "ArrowUp") {
        newIndex = (currentIndex - 1 + fontFamilyOptions.length) % fontFamilyOptions.length;
      } else if (event.key === "ArrowDown") {
        newIndex = (currentIndex + 1) % fontFamilyOptions.length;
      }
      if (newIndex !== undefined) {
        setAttributes({
          fontFamily: fontFamilyOptions[newIndex].value
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fontFamily, fontFamilyOptions, setAttributes]);

  // Initialize state with the stored value or default to 0
  const [storedSliderWidth, setStoredSliderWidth] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(attributes.sliderWidth || 100);
  const [storedSliderHeight, setStoredSliderHeight] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(attributes.sliderHeight || 100);

  // Function to handle change in TextControl
  const onChangeWidth = value => {
    setStoredSliderWidth(value); // Update local state
    setAttributes({
      sliderWidth: value
    }); // Update block attributes
  };
  const onChangeHeight = value => {
    setStoredSliderHeight(value); // Update local state
    setAttributes({
      sliderHeight: value
    }); // Update block attributes
  };
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // Mock function to simulate fetching the text color from Editor.js settings
    const fetchTextColor = () => {
      // Replace with actual logic to get text color
      // For example: setTextColor(Editor.settings.textColor);
      const color = "#FF5733"; // Example color (change this to your desired color)
      setTextColor(color);
    };
    fetchTextColor();
  }, []);
  const onChangeContent = newContent => {
    setAttributes({
      content: newContent
    });
  };
  const onChangeAlignment = newAlignment => {
    setAttributes({
      alignment: newAlignment === undefined ? "none" : newAlignment
    });
  };

  // alighn items and justify content.........
  const onChangeAlignItems = newAlignItems => {
    setAttributes({
      alignItems: newAlignItems
    });
  };
  const onChangeJustifyContent = newJustifyContent => {
    setAttributes({
      justifyContent: newJustifyContent
    });
  };

  // FOR CHANGING TEXT ON THE BASIS OF SELECT CONTROLL CHANGE
  const [viewportSize, setViewportSize] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(textSize);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setViewportSize("mobile");
      } else if (width <= 1024) {
        setViewportSize("tablet");
      } else {
        setViewportSize("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setAttributes({
      textSize: viewportSize
    });
  }, [viewportSize]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      style: {
        fontFamily: fontFamily
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
        children: "My Rough Text"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: "Text Size",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: "Responsive Text Size",
            value: viewportSize,
            options: [{
              label: "Desktop",
              value: "desktop"
            }, {
              label: "Tablet",
              value: "tablet"
            }, {
              label: "Mobile",
              value: "mobile"
            }],
            onChange: newTextSize => setViewportSize(newTextSize)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          initialOpen: false,
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slider Settings", "custom-image-slider"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "custom-image-slider"),
            value: sliderWidth,
            onChange: onChangeWidth,
            min: 10,
            max: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "custom-image-slider"),
            value: sliderHeight,
            onChange: onChangeHeight,
            min: 5,
            max: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          initialOpen: false,
          title: "First Heading Styles",
          className: "my-panel-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            className: "panel-column",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("SELECT FONT SIZE FOR FIRST HEADING", "custom-image-slider")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FontSizePicker, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size:", "custom-image-slider"),
              value: fontSize,
              onChange: fontSize => setAttributes({
                fontSize
              }),
              withSlider: true
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            className: "panel-column",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("SELECT FONT COLOR FOR FIRST HEADING", "custom-image-slider")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "custom-image-slider"),
              value: textColors,
              onChange: newColor => setAttributes({
                textColors: newColor
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            className: "panel-column",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("SELECT FONT WEIGHT FOR FIRST HEADING", "custom-image-slider")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "text-domain"),
              value: attributes.fontWeight,
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "text-domain"),
                value: "normal"
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bold", "text-domain"),
                value: "bold"
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bolder", "text-domain"),
                value: "bolder"
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lighter", "text-domain"),
                value: "lighter"
              }],
              onChange: value => setAttributes({
                fontWeight: value
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family Settings", "my-plugin"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Family", "my-plugin"),
            value: fontFamily,
            options: fontFamilyOptions,
            onChange: value => setAttributes({
              fontFamily: value
            }),
            ref: selectRef
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Alignment"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
              value: alignment,
              onChange: onChangeAlignment
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Align Items"),
              value: alignItems,
              options: [{
                label: "Flex Start",
                value: "flex-start"
              }, {
                label: "Center",
                value: "center"
              }, {
                label: "Flex End",
                value: "flex-end"
              }, {
                label: "Stretch",
                value: "stretch"
              }, {
                label: "Baseline",
                value: "baseline"
              }],
              onChange: onChangeAlignItems
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Justify Content"),
              value: justifyContent,
              options: [{
                label: "Flex Start",
                value: "flex-start"
              }, {
                label: "Center",
                value: "center"
              }, {
                label: "Flex End",
                value: "flex-end"
              }, {
                label: "Space Between",
                value: "space-between"
              }, {
                label: "Space Around",
                value: "space-around"
              }, {
                label: "Space Evenly",
                value: "space-evenly"
              }],
              onChange: onChangeJustifyContent
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          style: {
            textAlign: alignment
          },
          children: "Exercitation sint mollit mollit quis velit nostrud adipisicing aliquip."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
            value: alignment,
            onChange: onChangeAlignment
          })
        }), storedSliderWidth, sliderHeight, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          style: {
            fontFamily: fontFamily
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("This is a sample text with the selected font family.", "my-plugin")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "slider",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "slides",
            children: allPosts.map(post => {
              const featuredImage = post._embedded["wp:featuredmedia"] ? post._embedded["wp:featuredmedia"][0].source_url : "";
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "slide",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                  src: featuredImage,
                  width: "300px"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "caption",
                  style: {
                    display: "flex",
                    alignItems: alignItems,
                    justifyContent: justifyContent,
                    width: "100%",
                    minHeight: "100px",
                    top: "0px",
                    bottom: "0px",
                    left: "0px",
                    right: "0px",
                    color: "white"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                    tagName: "div",
                    className: "title",
                    value: post.title.rendered,
                    onChange: newContent => setAttributes({
                      content: newContent
                    }),
                    style: {
                      color: textColors,
                      fontSize: `${fontSize}px`,
                      fontWeight: attributes.fontWeight
                    },
                    readOnly: isReadOnly
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "line",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
                      children: "Line one"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                    className: "line",
                    children: "line two"
                  })]
                })]
              });
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "navigation",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "nav-btn",
              id: "prev",
              children: "Prev"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "nav-btn",
              id: "next",
              children: "Next"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: `${textSize}`,
          children: "Qui dolore nulla nisi veniam sit occaecat nulla proident."
        })]
      })]
    })
  });
}
const getEditorTextColor = async () => {
  // Mock function: replace with actual logic to get text color
  return "#FF5733"; // Example color
};

/***/ }),

/***/ "./src/custom-image-slider/index.js":
/*!******************************************!*\
  !*** ./src/custom-image-slider/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/custom-image-slider/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/custom-image-slider/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/custom-image-slider/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/custom-image-slider/editor.scss":
/*!*********************************************!*\
  !*** ./src/custom-image-slider/editor.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/custom-image-slider/style.scss":
/*!********************************************!*\
  !*** ./src/custom-image-slider/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/custom-image-slider/block.json":
/*!********************************************!*\
  !*** ./src/custom-image-slider/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/custom-image-slider","version":"0.1.0","title":"Custom Image Slider","category":"widgets","icon":"smiley","attributes":{"sliderWidth":{"type":"number","default":"10"},"sliderHeight":{"type":"number","default":"5"},"content":{"type":"string","source":"html","selector":"div"},"content2":{"type":"string","source":"html","selector":"p"},"alignment":{"type":"string","default":"none"},"alignItems":{"type":"string","default":"stretch"},"justifyContent":{"type":"string","default":"flex-start"},"textColors":{"type":"string","default":"#000000"},"fontSize":{"type":"number","default":16},"fontWeight":{"type":"string","default":"normal"},"fontFamily":{"type":"string","default":"Arial"},"textSize":{"type":"string","default":"desktop"}},"description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"shadow":true,"html":false,"color":{"text":true,"background":true},"typography":{"fontSize":true,"lineHeight":true}},"textdomain":"custom-image-slider","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","selectors":{"root":".wp-block-create-block-custom-image-slider","color":".wp-block-create-block-custom-image-slider .slider .slides .slide .caption .wp-block-create-block-custom-image-slider-title"},"render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"custom-image-slider/index": 0,
/******/ 			"custom-image-slider/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcustom_image_slider"] = globalThis["webpackChunkcustom_image_slider"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["custom-image-slider/style-index"], () => (__webpack_require__("./src/custom-image-slider/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map