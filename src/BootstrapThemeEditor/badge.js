(function (window) {
	"use strict";

	/**
	 * Allows modification of a Badge component in Bootstrap.
	 * 
	 * @class Badge
	 * @extends ThemeModifier
	 * 
	 * @param {ThemeEditor} editor instance which manages the less modifications.
	 * 
	 * @property {object} color The @badge-color variable which controls the Color of the Badge component.
	 * @property {object} linkHoverColor The @badge-link-hover-color variable which controls the Link Hover Color of the Badge component.
	 * @property {object} bg The @badge-bg variable which controls the Background Color of the Badge component.
	 * @property {object} activeColor The @badge-active-color variable which controls the Active Color of the Badge component.
	 * @property {object} activeBg The @badge-active-bg variable which controls the Active Background Color of the Badge component.
	 * @property {object} fontWeight The @badge-font-weight variable which controls the Font Weight of the Badge component.
	 * @property {object} lineHeight The @badge-line-height variable which controls the Line Height of the Badge component.
	 * @property {object} borderRadius The @badge-border-radius variable which controls the Border Radius of the Badge component.
	 * 
	 * @returns {Badge}
	 */
	var Badge = function (editor) {
		ThemeModifier.call(this, editor); // Call parent constructor

        // Configure the Modifiers
		this.color = {
			variable: '@badge-color',
			value: null
		};
        this.linkHoverColor = {
			variable: '@badge-link-hover-color',
			value: null
		};
        this.bg = {
			variable: '@badge-bg',
			value: null
        };
		this.activeColor = {
			variable: '@badge-active-color',
			value: null
		};
		this.activeBg = {
			variable: '@badge-active-bg',
			value: null
		};
		this.fontWeight = {
			variable: '@badge-font-weight',
			value: null
		};
		this.lineHeight = {
			variable: '@badge-line-height',
			value: null
		};
		this.borderRadius = {
			variable: '@badge-border-radius',
			value: null
		};
		
        // Configure the modifiers so they can be extracted easier
        this.modifiers = {
            color:          this.color,
            linkHoverColor: this.linkHoverColor,
            bg:             this.bg,
            activeColor:    this.activeColor,
            activeBg:       this.activeBg,
            fontWeight:     this.fontWeight,
            lineHeight:     this.lineHeight,
            borderRadius:   this.borderRadius
        };
	};
	
	// Inherit from parent Prototype and preserve constructor
	Badge.prototype = Object.create(ThemeModifier.prototype);
	Badge.constructor = Badge;

    /**
	 * Gets the Color of the Badge Component.
	 * 
	 * @returns {string}
	 */
	Badge.prototype.getColor = function () {
		return this.modifiers.color.value;
	};

	/**
	 * Sets the Color of the Badge Component.
	 * 
	 * @param {string} color Sets the Color.
	 * 
	 * @returns {undefined}
	 */
	Badge.prototype.setColor = function (color) {
		this.modifiers.color.value = color;
		this.editor.queueModifications();
	};

    /**
	 * Gets the Link Hover Color of the Badge Component.
	 * 
	 * @returns {string}
	 */
	Badge.prototype.getLinkHoverColor = function () {
		return this.modifiers.linkHoverColor.value;
	};
	
	/**
	 * Sets the Link Hover Color of the Badge Component.
	 * 
	 * @param {string} linkHoverColor Sets the Link Hover Color.
	 * 
	 * @returns {undefined}
	 */
	Badge.prototype.setLinkHoverColor = function (linkHoverColor) {
		this.modifiers.linkHoverColor.value = linkHoverColor;
		this.editor.queueModifications();
	};

	/**
	 * Gets the Background Color of the Badge Component.
	 * 
	 * @returns {String}
	 */
	Badge.prototype.getBackgroundColor = function () {
		return this.modifiers.bg.value;
	};

	/**
	 * Sets the Background Color of the Badge Component.
	 * 
	 * @param {string} backgroundColor Sets the Background Color of the Badge Component.
	 * 
	 * @returns {undefined}
	 */
	Badge.prototype.setBackgroundColor = function (backgroundColor) {
		this.modifiers.bg.value = backgroundColor;
		this.editor.queueModifications();
	};

	/**
	 * Gets the Active Color of the Badge Component.
	 * 
	 * @returns {string}
	 */
	Badge.prototype.getActiveColor = function () {
		return this.modifiers.activeColor.value;
	};

	/**
	 * Sets the Active Color of the Badge Component.
	 * 
	 * @param {string} activeColor Sets the Badge Active Color.
	 * 
	 * @returns {undefined}
	 */
	Badge.prototype.setActiveColor = function (activeColor) {
		this.modifiers.activeColor.value = activeColor;
		this.editor.queueModifications();
    };

	/**
	 * Gets the Active Background Color of the Badge Component.
	 * 
	 * @returns {string}
	 */
	Badge.prototype.getActiveBackgroundColor = function () {
		return this.modifiers.activeBg.value;
	};

	/**
	 * Sets the Active BackgroundColor of the Badge Component.
	 * 
	 * @param {string} activeBg Sets the Badge Active Background Color.
	 * 
	 * @returns {undefined}
	 */
	Badge.prototype.setActiveBackgroundColor = function (activeBg) {
		this.modifiers.activeBg.value = activeBg;
		this.editor.queueModifications();
    };

    /**
     * Gets the Font Weight of the Badge Component.
     * 
     * @returns {string}
     */
    Badge.prototype.getFontWeight = function () {
        return this.modifiers.fontWeight.value;
    };

    /**
     * Sets the Font Weight of the Badge Component.
     * 
     * @param {string} fontWeight Sets the Badge Font Weight.
     * 
     * @returns {undefined}
     */
    Badge.prototype.setFontWeight = function (fontWeight) {
        this.modifiers.fontWeight.value = fontWeight;
        this.editor.queueModifications();
    };

    /**
     * Gets the Line Height of the Badge Component.
     * 
     * @returns {string}
     */
    Badge.prototype.getLineHeight = function () {
        return this.modifiers.lineHeight.value;
    };

    /**
     * Sets the Line Height of the Badge Component.
     * 
     * @param {string} lineHeight Sets the Badge Line Height.
     * 
     * @returns {undefined}
     */
    Badge.prototype.setLineHeight = function (lineHeight) {
        this.modifiers.lineHeight.value = lineHeight;
        this.editor.queueModifications();
    };

    /**
     * Gets the Border Radius of the Badge Component.
     * 
     * @returns {string}
     */
    Badge.prototype.getBorderRadius = function () {
        return this.modifiers.borderRadius.value;
    };

    /**
     * Sets the Border Radius of the Badge Component.
     * 
     * @param {string} borderRadius Sets the Badge Border Radius.
     * 
     * @returns {undefined}
     */
    Badge.prototype.setBorderRadius = function (borderRadius) {
        this.modifiers.borderRadius.value = borderRadius + 'px';
        this.editor.queueModifications();
    };

	window.Badge = Badge;
})(window);