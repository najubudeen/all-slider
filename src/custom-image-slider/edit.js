import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
import {
	PanelBody,
	RangeControl,
	PanelRow,
	ColorPalette,
	FontSizePicker,
	SelectControl,
} from "@wordpress/components";
import "./editor.scss";
import { useState, useEffect, useRef } from "react";

import { useSelect } from '@wordpress/data';
import { getEntityRecords } from '@wordpress/core-data';
import { select } from '@wordpress/data';


export default function Edit({ attributes, setAttributes }) {
	const [allPosts, setAllPosts] = useState([]);
	const [textColor, setTextColor] = useState("#000");
	useEffect(() => {
		fetch("http://my-new-block-plugin.local/wp-json/wp/v2/posts?_embed", {
			cache: "no-store",
		})
			.then((response) => response.json())
			.then((data) => {
				if (data) {
					setAllPosts(data);
					return data.map((d) => {
						const featuredImage = d._embedded["wp:featuredmedia"]
							? d._embedded["wp:featuredmedia"][0].source_url
							: "";
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
		textSize,
	} = attributes;

	// ADDING FONT FAMILY, WITH 34 FONTS
	const fontFamilyOptions = [
		{ label: "Arial", value: "Arial" },
		{ label: "Helvetica", value: "Helvetica" },
		{ label: "Times New Roman", value: "Times New Roman" },
		{ label: "Courier New", value: "Courier New" },
		{ label: "Georgia", value: "Georgia" },
		{ label: "Verdana", value: "Verdana" },
		{ label: "Tahoma", value: "Tahoma" },
		{ label: "Trebuchet MS", value: "Trebuchet MS" },
		{ label: "Comic Sans MS", value: "Comic Sans MS" },
		{ label: "Lucida Console", value: "Lucida Console" },
		{ label: "Monaco", value: "Monaco" },
		{ label: "Garamond", value: "Garamond" },
		{ label: "Impact", value: "Impact" },
		{ label: "Palatino", value: "Palatino" },
		{ label: "Century Gothic", value: "Century Gothic" },
		{ label: "Brush Script MT", value: "Brush Script MT" },
		{ label: "Cambria", value: "Cambria" },
		{ label: "Candara", value: "Candara" },
		{ label: "Consolas", value: "Consolas" },
		{ label: "Corbel", value: "Corbel" },
		{ label: "Franklin Gothic Medium", value: "Franklin Gothic Medium" },
		{ label: "Gill Sans", value: "Gill Sans" },
		{ label: "Perpetua", value: "Perpetua" },
		{ label: "Rockwell", value: "Rockwell" },
		{ label: "Segoe UI", value: "Segoe UI" },
		{ label: "Futura", value: "Futura" },
		{ label: "Calibri", value: "Calibri" },
		{ label: "Book Antiqua", value: "Book Antiqua" },
		{ label: "Lucida Bright", value: "Lucida Bright" },
		{ label: "Papyrus", value: "Papyrus" },
		{ label: "Didot", value: "Didot" },
		{ label: "French Script MT", value: "French Script MT" },
		{ label: "Herculanum", value: "Herculanum" },
		{ label: "Kohinoor Bangla", value: "Kohinoor Bangla" },
	];

	const selectRef = useRef();
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.target !== selectRef.current) return;

			const currentIndex = fontFamilyOptions.findIndex(
				(option) => option.value === fontFamily,
			);
			let newIndex;

			if (event.key === "ArrowUp") {
				newIndex =
					(currentIndex - 1 + fontFamilyOptions.length) %
					fontFamilyOptions.length;
			} else if (event.key === "ArrowDown") {
				newIndex = (currentIndex + 1) % fontFamilyOptions.length;
			}

			if (newIndex !== undefined) {
				setAttributes({ fontFamily: fontFamilyOptions[newIndex].value });
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [fontFamily, fontFamilyOptions, setAttributes]);

	// Initialize state with the stored value or default to 0
	const [storedSliderWidth, setStoredSliderWidth] = useState(
		attributes.sliderWidth || 100,
	);
	const [storedSliderHeight, setStoredSliderHeight] = useState(
		attributes.sliderHeight || 100,
	);

	// Function to handle change in TextControl
	const onChangeWidth = (value) => {
		setStoredSliderWidth(value); // Update local state
		setAttributes({ sliderWidth: value }); // Update block attributes
	};
	const onChangeHeight = (value) => {
		setStoredSliderHeight(value); // Update local state
		setAttributes({ sliderHeight: value }); // Update block attributes
	};

	useEffect(() => {
		// Mock function to simulate fetching the text color from Editor.js settings
		const fetchTextColor = () => {
			// Replace with actual logic to get text color
			// For example: setTextColor(Editor.settings.textColor);
			const color = "#FF5733"; // Example color (change this to your desired color)
			setTextColor(color);
		};

		fetchTextColor();
	}, []);

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};

	const onChangeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment === undefined ? "none" : newAlignment,
		});
	};

	// alighn items and justify content.........
	const onChangeAlignItems = (newAlignItems) => {
		setAttributes({ alignItems: newAlignItems });
	};

	const onChangeJustifyContent = (newJustifyContent) => {
		setAttributes({ justifyContent: newJustifyContent });
	};

	// FOR CHANGING TEXT ON THE BASIS OF SELECT CONTROLL CHANGE
	const [viewportSize, setViewportSize] = useState(textSize);
	useEffect(() => {
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

	useEffect(() => {
		setAttributes({ textSize: viewportSize });
	}, [viewportSize]);


	
	return (
		<>
			<div style={{ fontFamily: fontFamily }}>
				<InspectorControls>
					<PanelBody title="Text Size">
						<SelectControl
							label="Responsive Text Size"
							value={viewportSize}
							options={[
								{ label: "Desktop", value: "desktop" },
								{ label: "Tablet", value: "tablet" },
								{ label: "Mobile", value: "mobile" },
							]}
							onChange={(newTextSize) => setViewportSize(newTextSize)}
						/>
					</PanelBody>
					<PanelBody
						initialOpen={false}
						title={__("Slider Settings", "custom-image-slider")}
					>
						<RangeControl
							label={__("Width", "custom-image-slider")}
							value={sliderWidth}
							onChange={onChangeWidth}
							min={10}
							max={100}
						/>
						<RangeControl
							label={__("Height", "custom-image-slider")}
							value={sliderHeight}
							onChange={onChangeHeight}
							min={5}
							max={100}
						/>
						<PanelRow></PanelRow>
					</PanelBody>
					<PanelBody
						initialOpen={false}
						title="First Heading Styles"
						className="my-panel-body"
					>
						<PanelRow className="panel-column">
							<label>
								{__("SELECT FONT SIZE FOR FIRST HEADING", "custom-image-slider")}
							</label>
							<FontSizePicker
								label={__("Font Size:", "custom-image-slider")}
								value={fontSize}
								onChange={(fontSize) => setAttributes({ fontSize })}
								withSlider
							/>
						</PanelRow>
						<PanelRow className="panel-column">
							<label>
								{__("SELECT FONT COLOR FOR FIRST HEADING", "custom-image-slider")}
							</label>
							<ColorPalette
								label={__("Color", "custom-image-slider")}
								value={textColors}
								onChange={(newColor) => setAttributes({ textColors: newColor })}
							/>
						</PanelRow>
						<PanelRow className="panel-column">
							<label>
								{__(
									"SELECT FONT WEIGHT FOR FIRST HEADING",
									"custom-image-slider",
								)}
							</label>

							<SelectControl
								label={__("Font Weight", "text-domain")}
								value={attributes.fontWeight}
								options={[
									{ label: __("Normal", "text-domain"), value: "normal" },
									{ label: __("Bold", "text-domain"), value: "bold" },
									{ label: __("Bolder", "text-domain"), value: "bolder" },
									{ label: __("Lighter", "text-domain"), value: "lighter" },
								]}
								onChange={(value) => setAttributes({ fontWeight: value })}
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title={__("Font Family Settings", "my-plugin")}>
						<SelectControl
							label={__("Font Family", "my-plugin")}
							value={fontFamily}
							options={fontFamilyOptions}
							onChange={(value) => setAttributes({ fontFamily: value })}
							ref={selectRef}
						/>
					</PanelBody>
					<PanelBody title={__("Text Alignment")}>
						<PanelRow>
							<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
						</PanelRow>

						<PanelRow>
							<SelectControl
								label={__("Align Items")}
								value={alignItems}
								options={[
									{ label: "Flex Start", value: "flex-start" },
									{ label: "Center", value: "center" },
									{ label: "Flex End", value: "flex-end" },
									{ label: "Stretch", value: "stretch" },
									{ label: "Baseline", value: "baseline" },
								]}
								onChange={onChangeAlignItems}
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={__("Justify Content")}
								value={justifyContent}
								options={[
									{ label: "Flex Start", value: "flex-start" },
									{ label: "Center", value: "center" },
									{ label: "Flex End", value: "flex-end" },
									{ label: "Space Between", value: "space-between" },
									{ label: "Space Around", value: "space-around" },
									{ label: "Space Evenly", value: "space-evenly" },
								]}
								onChange={onChangeJustifyContent}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				<div {...useBlockProps()}>
					{/* <RichText
						tagName="p"
						value={content}
						onChange={onChangeContent}
						style={{ textAlign: alignment }}
					/> */}
					<p style={{ textAlign: alignment }}>
						Exercitation sint mollit mollit quis velit nostrud adipisicing
						aliquip.
					</p>
					<BlockControls>
						<AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
					</BlockControls>

					{storedSliderWidth}
					{sliderHeight}
					<div style={{ fontFamily: fontFamily }}>
						<p>
							{__(
								"This is a sample text with the selected font family.",
								"my-plugin",
							)}
						</p>
					</div>

					<div className="slider">
						<div className="slides">
							{allPosts.map((post) => {
								const featuredImage = post._embedded["wp:featuredmedia"]
									? post._embedded["wp:featuredmedia"][0].source_url
									: "";
								return (
									<div className="slide">
										<img src={featuredImage} width={"300px"}></img>
										<div
											className="caption"
											style={{
												display: "flex",
												alignItems: alignItems,
												justifyContent: justifyContent,
												width: "100%",
												minHeight: "100px",
												top: "0px",
												bottom: "0px",
												left: "0px",
												right: "0px",
												color: "white",
											}}
										>
											{/* <div className="title" style={{ color: textColor }}>{post.title.rendered}</div> */}
											<RichText
												tagName="div"
												className="title"
												value={post.title.rendered}
												onChange={(newContent) =>
													setAttributes({ content: newContent })
												}
												style={{
													color: textColors,
													fontSize: `${fontSize}px`,
													fontWeight: attributes.fontWeight,
												}}
												readOnly={isReadOnly}
											/>
											<div className="line">
												<h5>Line one</h5>
											</div>
											<div className="line">line two</div>
										</div>
									</div>
								);
							})}
						</div>
						<div className="navigation">
							<div className="nav-btn" id="prev">
								Prev
							</div>
							<div className="nav-btn" id="next">
								Next
							</div>
						</div>
					</div>
					<div className={`${textSize}`}>
						Qui dolore nulla nisi veniam sit occaecat nulla proident.
					</div>
				</div>
			</div>
		</>
	);
}
const getEditorTextColor = async () => {
	// Mock function: replace with actual logic to get text color
	return "#FF5733"; // Example color
};
