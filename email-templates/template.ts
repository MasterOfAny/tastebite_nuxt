export const newsletterTemplate = `
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title></title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]--><!--[if !mso]><!-- --><link href="https://fonts.googleapis.com/css2?family=Besley&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Manrope&amp;display=swap" rel="stylesheet"><!--<![endif]--><link rel="stylesheet" type="text/css" href="https://stripo.email/static/assets/css/minimalist/editor.css?t=F61A"><link href="https://fonts.googleapis.com/css?family=Arvo:400,400i,700,700i|Lato:400,400i,700,700i|Lora:400,400i,700,700i|Merriweather:400,400i,700,700i|Merriweather Sans:400,400i,700,700i|Noticia Text:400,400i,700,700i|Open Sans:400,400i,700,700i|Playfair Display:400,400i,700,700i|Roboto:400,400i,700,700i|Source Sans Pro:400,400i,700,700i" rel="stylesheet"><link href="https://stripo.email/static/assets/css/dev-custom-scroll.css" rel="stylesheet"><link href="https://stripo.email/static/assets/fonts/banner/fonts.css" rel="stylesheet"><link href="https://stripo.email/static/assets/css/jquery-ui.css" rel="stylesheet" type="text/css"><link rel="stylesheet" href="https://stripo.email/static/assets/css/dev-preview-styles.css" class="esdev-internal-css"><style class="esdev-css">/* CONFIG STYLES Please do not delete and edit CSS styles below */
/* IMPORTANT THIS STYLES MUST BE ON FINAL EMAIL */
#outlook a {
	padding: 0;
}
.es-button {
	mso-style-priority: 100 !important;
	text-decoration: none !important;
}
a[x-apple-data-detectors] {
	color: inherit !important;
	text-decoration: none !important;
	font-size: inherit !important;
	font-family: inherit !important;
	font-weight: inherit !important;
	line-height: inherit !important;
}
.es-desk-hidden {
	display: none;
	float: left;
	overflow: hidden;
	width: 0;
	max-height: 0;
	line-height: 0;
	mso-hide: all;
}
/*
END OF IMPORTANT
*/
body {
	width: 100%;
	font-family: Manrope, Arial, sans-serif;
	-webkit-text-size-adjust: 100%;
	-ms-text-size-adjust: 100%;
}
table {
	mso-table-lspace: 0pt;
	mso-table-rspace: 0pt;
	border-collapse: collapse;
	border-spacing: 0px;
}
table td,
body,
.es-wrapper {
	padding: 0;
	Margin: 0;
}
.es-content,
.es-header,
.es-footer {
	table-layout: fixed !important;
	width: 100%;
}
img {
	display: block;
	border: 0;
	outline: none;
	text-decoration: none;
	-ms-interpolation-mode: bicubic;
}
p,
hr {
	Margin: 0;
}
h1, h2, h3, h4, h5, h6 {
	Margin: 0;
	line-height: 120%;
	mso-line-height-rule: exactly;
	font-family: Besley, serif;
}
p,
ul li,
ol li,
a {
	-webkit-text-size-adjust: none;
	-ms-text-size-adjust: none;
	mso-line-height-rule: exactly;
}
.es-left {
	float: left;
}
.es-right {
	float: right;
}
.es-p5 {
	padding: 5px;
}
.es-p5t {
	padding-top: 5px;
}
.es-p5b {
	padding-bottom: 5px;
}
.es-p5l {
	padding-left: 5px;
}
.es-p5r {
	padding-right: 5px;
}
.es-p10 {
	padding: 10px;
}
.es-p10t {
	padding-top: 10px;
}
.es-p10b {
	padding-bottom: 10px;
}
.es-p10l {
	padding-left: 10px;
}
.es-p10r {
	padding-right: 10px;
}
.es-p15 {
	padding: 15px;
}
.es-p15t {
	padding-top: 15px;
}
.es-p15b {
	padding-bottom: 15px;
}
.es-p15l {
	padding-left: 15px;
}
.es-p15r {
	padding-right: 15px;
}
.es-p20 {
	padding: 20px;
}
.es-p20t {
	padding-top: 20px;
}
.es-p20b {
	padding-bottom: 20px;
}
.es-p20l {
	padding-left: 20px;
}
.es-p20r {
	padding-right: 20px;
}
.es-p25 {
	padding: 25px;
}
.es-p25t {
	padding-top: 25px;
}
.es-p25b {
	padding-bottom: 25px;
}
.es-p25l {
	padding-left: 25px;
}
.es-p25r {
	padding-right: 25px;
}
.es-p30 {
	padding: 30px;
}
.es-p30t {
	padding-top: 30px;
}
.es-p30b {
	padding-bottom: 30px;
}
.es-p30l {
	padding-left: 30px;
}
.es-p30r {
	padding-right: 30px;
}
.es-p35 {
	padding: 35px;
}
.es-p35t {
	padding-top: 35px;
}
.es-p35b {
	padding-bottom: 35px;
}
.es-p35l {
	padding-left: 35px;
}
.es-p35r {
	padding-right: 35px;
}
.es-p40 {
	padding: 40px;
}
.es-p40t {
	padding-top: 40px;
}
.es-p40b {
	padding-bottom: 40px;
}
.es-p40l {
	padding-left: 40px;
}
.es-p40r {
	padding-right: 40px;
}
.es-menu td {
	border: 0;
}
.es-menu td a img {
	display: inline-block !important;
	vertical-align: middle;
}
/*
END CONFIG STYLES
*/
s {
	text-decoration: line-through;
}
p,
ul li,
ol li {
	font-family: Manrope, Arial, sans-serif;
	line-height: 150%;
}
ul li,
ol li {
	Margin-bottom: 15px;
	margin-left: 0;
}
a {
	text-decoration: underline;
}
.es-menu td a {
	text-decoration: none;
	display: block;
	font-family: Manrope, Arial, sans-serif;
}
.es-wrapper {
	width: 100%;
	height: 100%;
	background-repeat: repeat;
	background-position: center top;
}
.es-wrapper-color,
.es-wrapper {
	background-color: #fef8f2;
}
.es-header {
	background-color: transparent;
	background-repeat: repeat;
	background-position: center top;
}
.es-header-body {
	background-color: transparent;
}
.es-header-body p,
.es-header-body ul li,
.es-header-body ol li {
	color: #0d2940;
	font-size: 14px;
}
.es-header-body a {
	color: #0d2940;
	font-size: 14px;
}
.es-content-body {
	background-color: #ffffff;
}
.es-content-body p,
.es-content-body ul li,
.es-content-body ol li {
	color: #333333;
	font-size: 16px;
}
.es-content-body a {
	color: #2cb543;
	font-size: 16px;
}
.es-footer {
	background-color: transparent;
	background-repeat: repeat;
	background-position: center top;
}
.es-footer-body {
	background-color: #ffffff;
}
.es-footer-body p,
.es-footer-body ul li,
.es-footer-body ol li {
	color: #cccccc;
	font-size: 12px;
}
.es-footer-body a {
	color: #cccccc;
	font-size: 12px;
}
.es-infoblock,
.es-infoblock p,
.es-infoblock ul li,
.es-infoblock ol li {
	line-height: 120%;
	font-size: 12px;
	color: #cccccc;
}
.es-infoblock a {
	font-size: 12px;
	color: #cccccc;
}
h1 {
	font-size: 30px;
	font-style: normal;
	font-weight: normal;
	color: #333333;
}
h2 {
	font-size: 28px;
	font-style: normal;
	font-weight: normal;
	color: #333333;
}
h3 {
	font-size: 22px;
	font-style: normal;
	font-weight: normal;
	color: #333333;
}
.es-header-body h1 a,
.es-content-body h1 a,
.es-footer-body h1 a {
	font-size: 30px;
}
.es-header-body h2 a,
.es-content-body h2 a,
.es-footer-body h2 a {
	font-size: 28px;
}
.es-header-body h3 a,
.es-content-body h3 a,
.es-footer-body h3 a {
	font-size: 22px;
}
a.es-button,
button.es-button {
	display: inline-block;
	background: #8c0020;
	border-radius: 30px;
	font-size: 18px;
	font-family: Manrope, Arial, sans-serif;
	font-weight: normal;
	font-style: normal;
	line-height: 120%;
	color: #ffffff;
	text-decoration: none;
	width: auto;
	text-align: center;
	padding: 10px 20px 10px 20px;
	mso-padding-alt: 0;
	mso-border-alt: 10px solid #8c0020;
}
.es-button-border {
	border-style: solid solid solid solid;
	border-color: #2cb543 #2cb543 #2cb543 #2cb543;
	background: #8c0020;
	border-width: 0px 0px 0px 0px;
	display: inline-block;
	border-radius: 30px;
	width: auto;
}
.msohide {
	mso-hide: all;
}
/* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
@media only screen and (max-width: 600px) {
	p,
    ul li,
    ol li,
    a {
		line-height: 150% !important;
	}
	h1,
    h2,
    h3,
    h1 a,
    h2 a,
    h3 a {
		line-height: 120% !important;
	}
	h1 {
		font-size: 30px !important;
		text-align: left;
	}
	h2 {
		font-size: 24px !important;
		text-align: left;
	}
	h3 {
		font-size: 20px !important;
		text-align: left;
	}
	.es-header-body h1 a,
    .es-content-body h1 a,
    .es-footer-body h1 a {
		font-size: 30px !important;
		text-align: left;
	}
	.es-header-body h2 a,
    .es-content-body h2 a,
    .es-footer-body h2 a {
		font-size: 24px !important;
		text-align: left;
	}
	.es-header-body h3 a,
    .es-content-body h3 a,
    .es-footer-body h3 a {
		font-size: 20px !important;
		text-align: left;
	}
	.es-menu td a {
		font-size: 12px !important;
	}
	.es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li,
    .es-header-body a {
		font-size: 12px !important;
	}
	.es-content-body p,
    .es-content-body ul li,
    .es-content-body ol li,
    .es-content-body a {
		font-size: 14px !important;
	}
	.es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li,
    .es-footer-body a {
		font-size: 12px !important;
	}
	.es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li,
    .es-infoblock a {
		font-size: 12px !important;
	}
	*[class="gmail-fix"] {
		display: none !important;
	}
	.es-m-txt-c,
    .es-m-txt-c h1,
    .es-m-txt-c h2,
    .es-m-txt-c h3 {
		text-align: center !important;
	}
	.es-m-txt-r,
    .es-m-txt-r h1,
    .es-m-txt-r h2,
    .es-m-txt-r h3 {
		text-align: right !important;
	}
	.es-m-txt-l,
    .es-m-txt-l h1,
    .es-m-txt-l h2,
    .es-m-txt-l h3 {
		text-align: left !important;
	}
	.es-m-txt-r img,
    .es-m-txt-c img,
    .es-m-txt-l img {
		display: inline !important;
	}
	.es-button-border {
		display: block !important;
	}
	a.es-button,
    button.es-button {
		font-size: 18px !important;
		display: block !important;
		padding-right: 0px !important;
		padding-left: 0px !important;
	}
	.es-adaptive table,
    .es-left,
    .es-right {
		width: 100% !important;
	}
	.es-content table,
    .es-header table,
    .es-footer table,
    .es-content,
    .es-footer,
    .es-header {
		width: 100% !important;
		max-width: 600px !important;
	}
	.es-adapt-td {
		display: block !important;
		width: 100% !important;
	}
	.adapt-img {
		width: 100% !important;
		height: auto !important;
	}
	.es-m-p0 {
		padding: 0 !important;
	}
	.es-m-p0r {
		padding-right: 0 !important;
	}
	.es-m-p0l {
		padding-left: 0 !important;
	}
	.es-m-p0t {
		padding-top: 0 !important;
	}
	.es-m-p0b {
		padding-bottom: 0 !important;
	}
	.es-m-p20b {
		padding-bottom: 20px !important;
	}
	.es-mobile-hidden,
    .es-hidden {
		display: none !important;
	}
	tr.es-desk-hidden,
    td.es-desk-hidden,
    table.es-desk-hidden {
		width: auto !important;
		overflow: visible !important;
		float: none !important;
		max-height: inherit !important;
		line-height: inherit !important;
	}
	tr.es-desk-hidden {
		display: table-row !important;
	}
	table.es-desk-hidden {
		display: table !important;
	}
	td.es-desk-menu-hidden {
		display: table-cell !important;
	}
	.es-menu td {
		width: 1% !important;
	}
	table.es-table-not-adapt,
    .esd-block-html table {
		width: auto !important;
	}
	table.es-social {
		display: inline-block !important;
	}
	table.es-social td {
		display: inline-block !important;
	}
	.es-desk-hidden {
		display: table-row !important;
		width: auto !important;
		overflow: visible !important;
		max-height: inherit !important;
	}
	.es-m-p5 {
		padding: 5px !important;
	}
	.es-m-p5t {
		padding-top: 5px !important;
	}
	.es-m-p5b {
		padding-bottom: 5px !important;
	}
	.es-m-p5r {
		padding-right: 5px !important;
	}
	.es-m-p5l {
		padding-left: 5px !important;
	}
	.es-m-p10 {
		padding: 10px !important;
	}
	.es-m-p10t {
		padding-top: 10px !important;
	}
	.es-m-p10b {
		padding-bottom: 10px !important;
	}
	.es-m-p10r {
		padding-right: 10px !important;
	}
	.es-m-p10l {
		padding-left: 10px !important;
	}
	.es-m-p15 {
		padding: 15px !important;
	}
	.es-m-p15t {
		padding-top: 15px !important;
	}
	.es-m-p15b {
		padding-bottom: 15px !important;
	}
	.es-m-p15r {
		padding-right: 15px !important;
	}
	.es-m-p15l {
		padding-left: 15px !important;
	}
	.es-m-p20 {
		padding: 20px !important;
	}
	.es-m-p20t {
		padding-top: 20px !important;
	}
	.es-m-p20r {
		padding-right: 20px !important;
	}
	.es-m-p20l {
		padding-left: 20px !important;
	}
	.es-m-p25 {
		padding: 25px !important;
	}
	.es-m-p25t {
		padding-top: 25px !important;
	}
	.es-m-p25b {
		padding-bottom: 25px !important;
	}
	.es-m-p25r {
		padding-right: 25px !important;
	}
	.es-m-p25l {
		padding-left: 25px !important;
	}
	.es-m-p30 {
		padding: 30px !important;
	}
	.es-m-p30t {
		padding-top: 30px !important;
	}
	.es-m-p30b {
		padding-bottom: 30px !important;
	}
	.es-m-p30r {
		padding-right: 30px !important;
	}
	.es-m-p30l {
		padding-left: 30px !important;
	}
	.es-m-p35 {
		padding: 35px !important;
	}
	.es-m-p35t {
		padding-top: 35px !important;
	}
	.es-m-p35b {
		padding-bottom: 35px !important;
	}
	.es-m-p35r {
		padding-right: 35px !important;
	}
	.es-m-p35l {
		padding-left: 35px !important;
	}
	.es-m-p40 {
		padding: 40px !important;
	}
	.es-m-p40t {
		padding-top: 40px !important;
	}
	.es-m-p40b {
		padding-bottom: 40px !important;
	}
	.es-m-p40r {
		padding-right: 40px !important;
	}
	.es-m-p40l {
		padding-left: 40px !important;
	}
}
/* END RESPONSIVE STYLES */
.es-p-default {
	padding-top: 20px;
	padding-right: 40px;
	padding-bottom: 20px;
	padding-left: 40px;
}
.es-p-all-default {
	padding: 0px;
}
</style></head><body><div dir="ltr" class="es-wrapper-color"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fef8f2"></v:fill>
			</v:background>
		<![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings ui-droppable" valign="top"><table class="esd-header-popover es-header ui-draggable" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe esd-frame esdev-disable-select esd-hover" align="center" esd-handler-name="stripeBlockHandler">
            <div class="esd-structure-type">
                    
        
            Stripe - Header
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div>
            <div class="esd-add-stripe">
                <a><span class="es-icon-plus"></span></a>
                <div class="esd-stripes-popover esd-hidden-right">
                    <div class="esd-popover-content">
                        
                                <div class="esd-stripe-preview" esd-element-name="structureType_100">
                                    
            <div class="col-xs-12">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_50_50">
                                    
            <div class="col-xs-6">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-6">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_33_33_33">
                                    
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_25_25_25_25">
                                    
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_33_66">
                                    
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-8">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_66_33">
                                    
            <div class="col-xs-8">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                    </div>
                </div>
            </div>
        <table class="es-header-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody class="ui-droppable"><tr class="ui-draggable"><td class="esd-structure es-p20t es-p20b es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-custom-block-id="1074924" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete" disabled="disabled">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellspacing="0" cellpadding="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td class="es-m-p0r esd-container-frame esd-frame esd-hover esdev-disable-select" width="520" valign="top" align="center" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table width="100%" cellspacing="0" cellpadding="0"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-image esd-frame esd-hover esdev-disable-select esd-draggable esd-block" style="font-size: 0px;" esd-handler-name="imgBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/guids/CABINET_640f7d7162fcf1b30f2d022e55cc9200e4215a9d684bf8ae35b9ecdad75eeeb3/images/tastytales.png" alt="Logo" style="display: block;" height="40" title="Logo"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table class="es-content ui-draggable" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe esd-frame esdev-disable-select esd-active" align="center" esd-handler-name="stripeBlockHandler">
            <div class="esd-structure-type">
                    
        
            Stripe - Content
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div>
            <div class="esd-add-stripe">
                <a><span class="es-icon-plus"></span></a>
                <div class="esd-stripes-popover esd-hidden-right">
                    <div class="esd-popover-content">
                        
                                <div class="esd-stripe-preview" esd-element-name="structureType_100">
                                    
            <div class="col-xs-12">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_50_50">
                                    
            <div class="col-xs-6">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-6">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_33_33_33">
                                    
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_25_25_25_25">
                                    
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_33_66">
                                    
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-8">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_66_33">
                                    
            <div class="col-xs-8">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                    </div>
                </div>
            </div>
        <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody class="ui-droppable"><tr class="ui-draggable"><td class="esd-structure es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esdev-disable-select esd-hover" align="left" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table width="100%" cellspacing="0" cellpadding="0"><tbody class="ui-droppable"><tr class="ui-draggable"><td class="es-m-p0r esd-container-frame esd-frame esd-hover esdev-disable-select" width="520" valign="top" align="center" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table width="100%" cellspacing="0" cellpadding="0"><tbody class="ui-droppable"><tr class="ui-draggable"><td class="esd-block-menu esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-tmp-divider="1|solid|#0d2940" esd-tmp-menu-color="#0d2940" esd-tmp-menu-font-size="12px" esd-handler-name="menuBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%" class="es-menu"><tbody><tr class="links"><td align="center" valign="top" width="33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-0"><a target="_blank" href="https://viewstripo.email" style="color: #0d2940; font-size: 12px;">News</a></td><td align="center" valign="top" width="33%" class="es-p10t es-p10b es-p5r es-p5l" style="border-left: 1px solid #0d2940;" id="esd-menu-id-1"><a target="_blank" href="https://viewstripo.email" style="color: #0d2940; font-size: 12px;">Blog</a></td><td align="center" valign="top" width="33%" class="es-p10t es-p10b es-p5r es-p5l" style="border-left: 1px solid #0d2940;" id="esd-menu-id-2"><a target="_blank" href="https://viewstripo.email" style="color: #0d2940; font-size: 12px;">Recipes</a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="ui-draggable"><td class="esd-structure esd-frame esdev-disable-select esd-hover" align="left" esd-custom-block-id="1074926" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="600" class="esd-container-frame esd-frame esd-hover esdev-disable-select" align="center" valign="top" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-banner esd-frame esd-hover esdev-disable-select esd-draggable esd-block" style="position: relative;" esd-handler-name="bannerBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><a target="_blank" href="https://viewstripo.email"><img class="adapt-img esdev-stretch-width esdev-banner-rendered" src="https://tlr.stripocdn.email/content/guids/bannerImgGuid/images/image17053174478046450.png" alt="" title="" width="600" style="display: block;"></a><esd-config-block style="display: none;"><esd-original-image scale="1" leftshift="0" topshift="0">
                         https://oioftq.stripocdn.email/content/guids/CABINET_640f7d7162fcf1b30f2d022e55cc9200e4215a9d684bf8ae35b9ecdad75eeeb3/images/4f95829ceabfca8edc8b193738d9b6f4_dpI.jpg
                        </esd-original-image><esd-aspect-ratio>
                         -1
                        </esd-aspect-ratio><esd-banner-container-resolution>
                         600x394
                        </esd-banner-container-resolution><esd-additional-picture leftshift="-122px" topshift="125px" width="832.672px" height="132.969px" keepaspectratio="true">
                         https://tlr.stripocdn.email/content/guids/CABINET_640f7d7162fcf1b30f2d022e55cc9200e4215a9d684bf8ae35b9ecdad75eeeb3/images/rectangle_25.png
                        </esd-additional-picture><esd-banner-caption leftshift="4px" topshift="154px" width="582px" height="124.5px" class="banner-caption-1705074627153"><p style="font-size: 55px; font-family: 'wild youth';">Burns Night Recipes</p></esd-banner-caption><esd-banner-caption leftshift="117px" topshift="133px" width="344px" height="39px" class="banner-caption-1705074654898"><p style="font-size: 26px; font-family: akrobat;">Savor the Flavors of Scotland</p></esd-banner-caption></esd-config-block></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="ui-draggable"><td class="esd-structure es-p30t es-p30b es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-custom-block-id="1074928" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="520" class="esd-container-frame esd-frame esd-hover esdev-disable-select" align="center" valign="top" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-text es-p40r es-p40l es-m-p0r es-m-p0l es-m-txt-c esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><h3>Dear Subscribers,</h3><p><br></p><p>As we approach the delightful occasion of Burns Night, we invite you to indulge in the culinary traditions of Scotland with these delectable recipes.</p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="ui-draggable"><td class="esd-structure es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="520" class="esd-container-frame esd-frame esd-hover esdev-disable-select" align="center" valign="top" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-spacer es-p20t es-p20b es-p30r es-p30l es-m-p0r es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" style="font-size:0" esd-handler-name="spacerBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"><tbody><tr><td style="border-bottom: 1px solid #0d2940; background: unset; height: 1px; width: 100%; margin: 0px;"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="ui-draggable"><td class="esd-structure es-p20t es-p20b es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-dynamic-block="{&amp;quot;link&amp;quot;:{&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;a&amp;quot;,&amp;quot;attribute&amp;quot;:&amp;quot;href&amp;quot;}]},&amp;quot;variables&amp;quot;:[{&amp;quot;variable&amp;quot;:&amp;quot;b_image&amp;quot;,&amp;quot;name&amp;quot;:&amp;quot;Image&amp;quot;,&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;.b_image&amp;quot;,&amp;quot;attribute&amp;quot;:&amp;quot;src&amp;quot;}],&amp;quot;externalMapping&amp;quot;:{&amp;quot;pageSelector&amp;quot;:{&amp;quot;selector&amp;quot;:&amp;quot;&amp;quot;},&amp;quot;modifier&amp;quot;:{&amp;quot;regexs&amp;quot;:[]}}},{&amp;quot;variable&amp;quot;:&amp;quot;b_title&amp;quot;,&amp;quot;name&amp;quot;:&amp;quot;Title&amp;quot;,&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;.b_title&amp;quot;}],&amp;quot;externalMapping&amp;quot;:{&amp;quot;pageSelector&amp;quot;:{&amp;quot;selector&amp;quot;:&amp;quot;&amp;quot;},&amp;quot;modifier&amp;quot;:{&amp;quot;regexs&amp;quot;:[]}}},{&amp;quot;variable&amp;quot;:&amp;quot;b_description&amp;quot;,&amp;quot;name&amp;quot;:&amp;quot;Description&amp;quot;,&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;.b_description&amp;quot;}],&amp;quot;externalMapping&amp;quot;:{&amp;quot;pageSelector&amp;quot;:{&amp;quot;selector&amp;quot;:&amp;quot;&amp;quot;},&amp;quot;modifier&amp;quot;:{&amp;quot;regexs&amp;quot;:[]}}}]}" esd-custom-block-id="1074929" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            
            <span class="es-icon-cog"></span> Smart-Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><table width="520" cellpadding="0" cellspacing="0"><tr><td width="280" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="280" class="es-m-p20b esd-container-frame esd-frame esd-hover esdev-disable-select" align="left" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-image es-p30l es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" style="font-size: 0px;" esd-handler-name="imgBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><a target="_blank" href="https://viewstripo.email"><img class="adapt-img b_image" src="https://tlr.stripocdn.email/content/guids/CABINET_640f7d7162fcf1b30f2d022e55cc9200e4215a9d684bf8ae35b9ecdad75eeeb3/images/1419_1_1436800872_1.png" alt="" style="display: block;" width="250"></a></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="220" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="220" align="left" class="esd-container-frame esd-frame esd-hover esdev-disable-select" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="left" class="esd-block-text es-p10b es-p30r es-m-p0r esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><h2 class="b_title">Haggis - A Burns Night Essential</h2></td></tr><tr class="ui-draggable"><td align="left" class="esd-block-text es-p15b es-p30r es-m-p0r esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><p style="font-size: 14px;" class="b_description">Discover the art of preparing traditional haggis, a savory dish made with lamb, spices, and oats. We'll guide you through each step for a perfect Burns Night feast</p></td></tr><tr class="ui-draggable"><td align="center" class="esd-block-button es-p10b es-p30r es-m-p0r esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="btnBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:41px; v-text-anchor:middle; width:190px" arcsize="50%" stroke="f"  fillcolor="#8c0020">
		<w:anchorlock></w:anchorlock>
		<center style='color:#ffffff; font-family:Manrope, Arial, sans-serif; font-size:15px; font-weight:400; line-height:15px;  mso-text-raise:1px'>Save Recipe</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="display: block;"><a href="https://viewstripo.email" class="es-button msohide" target="_blank" style="padding-left: 5px; padding-right: 5px; display: block;">Save Recipe</a></span><!--<![endif]--></td></tr><tr class="ui-draggable"><td align="center" class="esd-block-button es-p10t es-p30r es-m-p0r esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="btnBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:41px; v-text-anchor:middle; width:188px" arcsize="50%" strokecolor="#8c0020" strokeweight="1px" fillcolor="#ffffff">
		<w:anchorlock></w:anchorlock>
		<center style='color:#8c0020; font-family:Manrope, Arial, sans-serif; font-size:15px; font-weight:400; line-height:15px;  mso-text-raise:1px'>Shopping List</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="display: block; border-width: 1px; background: #ffffff; border-color: #8c0020;"><a href="https://viewstripo.email" class="es-button msohide" target="_blank" style="padding-left: 5px; padding-right: 5px; display: block; background: #ffffff; color: #8c0020; mso-border-alt: 10px solid #ffffff">Shopping List</a></span><!--<![endif]--></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--></td></tr><tr class="ui-draggable"><td class="esd-structure es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="520" class="esd-container-frame esd-frame esd-hover esdev-disable-select" align="center" valign="top" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-spacer es-p20t es-p20b es-p30r es-p30l es-m-p0r es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" style="font-size:0" esd-handler-name="spacerBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"><tbody><tr><td style="border-bottom: 1px solid #0d2940; background: unset; height: 1px; width: 100%; margin: 0px;"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="ui-draggable"><td class="esd-structure es-p20t es-p20b es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-dynamic-block="{&amp;quot;link&amp;quot;:{&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;a&amp;quot;,&amp;quot;attribute&amp;quot;:&amp;quot;href&amp;quot;}]},&amp;quot;variables&amp;quot;:[{&amp;quot;variable&amp;quot;:&amp;quot;b_image&amp;quot;,&amp;quot;name&amp;quot;:&amp;quot;Image&amp;quot;,&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;.b_image&amp;quot;,&amp;quot;attribute&amp;quot;:&amp;quot;src&amp;quot;}],&amp;quot;externalMapping&amp;quot;:{&amp;quot;pageSelector&amp;quot;:{&amp;quot;selector&amp;quot;:&amp;quot;&amp;quot;},&amp;quot;modifier&amp;quot;:{&amp;quot;regexs&amp;quot;:[]}}},{&amp;quot;variable&amp;quot;:&amp;quot;b_title&amp;quot;,&amp;quot;name&amp;quot;:&amp;quot;Title&amp;quot;,&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;.b_title&amp;quot;}],&amp;quot;externalMapping&amp;quot;:{&amp;quot;pageSelector&amp;quot;:{&amp;quot;selector&amp;quot;:&amp;quot;&amp;quot;},&amp;quot;modifier&amp;quot;:{&amp;quot;regexs&amp;quot;:[]}}},{&amp;quot;variable&amp;quot;:&amp;quot;b_description&amp;quot;,&amp;quot;name&amp;quot;:&amp;quot;Description&amp;quot;,&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;.b_description&amp;quot;}],&amp;quot;externalMapping&amp;quot;:{&amp;quot;pageSelector&amp;quot;:{&amp;quot;selector&amp;quot;:&amp;quot;&amp;quot;},&amp;quot;modifier&amp;quot;:{&amp;quot;regexs&amp;quot;:[]}}}]}" esd-custom-block-id="1074930" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            
            <span class="es-icon-cog"></span> Smart-Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><table dir="ltr" cellpadding="0" cellspacing="0"><tr><td><table dir="rtl" width="520" cellpadding="0" cellspacing="0"><tr><td dir="ltr" width="280" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="280" class="esd-container-frame es-m-p20b esd-frame esd-hover esdev-disable-select" align="left" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-image es-p30r es-m-p0r esd-frame esd-hover esdev-disable-select esd-draggable esd-block" style="font-size: 0px;" esd-handler-name="imgBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><a target="_blank" href="https://viewstripo.email"><img class="adapt-img b_image" src="https://tlr.stripocdn.email/content/guids/CABINET_640f7d7162fcf1b30f2d022e55cc9200e4215a9d684bf8ae35b9ecdad75eeeb3/images/scotchbrothintureenladle2_1_1.png" alt="" style="display: block;" width="250"></a></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td><td dir="ltr" width="20"></td><td dir="ltr" width="220" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="220" align="left" class="esd-container-frame esd-frame esd-hover esdev-disable-select" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="left" class="esd-block-text es-p10b es-p30l es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><h2 class="b_title">Scotch Broth - Hearty and Wholesome</h2></td></tr><tr class="ui-draggable"><td align="left" class="esd-block-text es-p15b es-p30l es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><p style="font-size: 14px;" class="b_description">Warm up your Burns Night celebration with a hearty bowl of Scotch broth. Learn how to create this nourishing soup with fresh vegetables and tender lamb</p></td></tr><tr class="ui-draggable"><td align="center" class="esd-block-button es-p10b es-p30l es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="btnBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:41px; v-text-anchor:middle; width:190px" arcsize="50%" stroke="f"  fillcolor="#8c0020">
		<w:anchorlock></w:anchorlock>
		<center style='color:#ffffff; font-family:Manrope, Arial, sans-serif; font-size:15px; font-weight:400; line-height:15px;  mso-text-raise:1px'>Save Recipe</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="display: block;"><a href="https://viewstripo.email" class="es-button msohide" target="_blank" style="padding-left: 5px; padding-right: 5px; display: block;">Save Recipe</a></span><!--<![endif]--></td></tr><tr class="ui-draggable"><td align="center" class="esd-block-button es-p10t es-p30l es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="btnBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:41px; v-text-anchor:middle; width:188px" arcsize="50%" strokecolor="#8c0020" strokeweight="1px" fillcolor="#ffffff">
		<w:anchorlock></w:anchorlock>
		<center style='color:#8c0020; font-family:Manrope, Arial, sans-serif; font-size:15px; font-weight:400; line-height:15px;  mso-text-raise:1px'>Shopping List</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="display: block; border-width: 1px; background: #ffffff; border-color: #8c0020;"><a href="https://viewstripo.email" class="es-button msohide" target="_blank" style="padding-left: 5px; padding-right: 5px; display: block; background: #ffffff; color: #8c0020; mso-border-alt: 10px solid #ffffff">Shopping List</a></span><!--<![endif]--></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td></tr></table></td></tr></table><![endif]--></td></tr><tr class="ui-draggable"><td class="esd-structure es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="520" class="esd-container-frame esd-frame esd-hover esdev-disable-select" align="center" valign="top" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-spacer es-p20t es-p20b es-p30r es-p30l es-m-p0r es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" style="font-size:0" esd-handler-name="spacerBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"><tbody><tr><td style="border-bottom: 1px solid #0d2940; background: unset; height: 1px; width: 100%; margin: 0px;"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="ui-draggable"><td class="esd-structure es-p20t es-p20b es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-dynamic-block="{&amp;quot;link&amp;quot;:{&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;a&amp;quot;,&amp;quot;attribute&amp;quot;:&amp;quot;href&amp;quot;}]},&amp;quot;variables&amp;quot;:[{&amp;quot;variable&amp;quot;:&amp;quot;b_image&amp;quot;,&amp;quot;name&amp;quot;:&amp;quot;Image&amp;quot;,&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;.b_image&amp;quot;,&amp;quot;attribute&amp;quot;:&amp;quot;src&amp;quot;}],&amp;quot;externalMapping&amp;quot;:{&amp;quot;pageSelector&amp;quot;:{&amp;quot;selector&amp;quot;:&amp;quot;&amp;quot;},&amp;quot;modifier&amp;quot;:{&amp;quot;regexs&amp;quot;:[]}}},{&amp;quot;variable&amp;quot;:&amp;quot;b_title&amp;quot;,&amp;quot;name&amp;quot;:&amp;quot;Title&amp;quot;,&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;.b_title&amp;quot;}],&amp;quot;externalMapping&amp;quot;:{&amp;quot;pageSelector&amp;quot;:{&amp;quot;selector&amp;quot;:&amp;quot;&amp;quot;},&amp;quot;modifier&amp;quot;:{&amp;quot;regexs&amp;quot;:[]}}},{&amp;quot;variable&amp;quot;:&amp;quot;b_description&amp;quot;,&amp;quot;name&amp;quot;:&amp;quot;Description&amp;quot;,&amp;quot;blockMapping&amp;quot;:[{&amp;quot;selector&amp;quot;:&amp;quot;.b_description&amp;quot;}],&amp;quot;externalMapping&amp;quot;:{&amp;quot;pageSelector&amp;quot;:{&amp;quot;selector&amp;quot;:&amp;quot;&amp;quot;},&amp;quot;modifier&amp;quot;:{&amp;quot;regexs&amp;quot;:[]}}}]}" esd-custom-block-id="1074931" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            
            <span class="es-icon-cog"></span> Smart-Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><table width="520" cellpadding="0" cellspacing="0"><tr><td width="280" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="280" class="es-m-p20b esd-container-frame esd-frame esd-hover esdev-disable-select" align="left" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-image es-p30l es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" style="font-size: 0px;" esd-handler-name="imgBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><a target="_blank" href="https://viewstripo.email"><img class="adapt-img b_image" src="https://tlr.stripocdn.email/content/guids/CABINET_640f7d7162fcf1b30f2d022e55cc9200e4215a9d684bf8ae35b9ecdad75eeeb3/images/cranachan683x1024_1.png" alt="" style="display: block;" width="250"></a></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="220" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="220" align="left" class="esd-container-frame esd-frame esd-hover esdev-disable-select" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="left" class="esd-block-text es-p10b es-p30r es-m-p0r esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><h2 class="b_title">Cranachan - A Sweet Finale</h2></td></tr><tr class="ui-draggable"><td align="left" class="esd-block-text es-p15b es-p30r es-m-p0r esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><p style="font-size: 14px;" class="b_description">Complete your Burns Night feast with the indulgent dessert, Cranachan. It's a delightful blend of whipped cream, toasted oats, honey, and raspberries.</p></td></tr><tr class="ui-draggable"><td align="center" class="esd-block-button es-p10b es-p30r es-m-p0r esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="btnBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:41px; v-text-anchor:middle; width:190px" arcsize="50%" stroke="f"  fillcolor="#8c0020">
		<w:anchorlock></w:anchorlock>
		<center style='color:#ffffff; font-family:Manrope, Arial, sans-serif; font-size:15px; font-weight:400; line-height:15px;  mso-text-raise:1px'>Save Recipe</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="display: block;"><a href="https://viewstripo.email" class="es-button msohide" target="_blank" style="padding-left: 5px; padding-right: 5px; display: block;">Save Recipe</a></span><!--<![endif]--></td></tr><tr class="ui-draggable"><td align="center" class="esd-block-button es-p10t es-p30r es-m-p0r esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="btnBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:41px; v-text-anchor:middle; width:188px" arcsize="50%" strokecolor="#8c0020" strokeweight="1px" fillcolor="#ffffff">
		<w:anchorlock></w:anchorlock>
		<center style='color:#8c0020; font-family:Manrope, Arial, sans-serif; font-size:15px; font-weight:400; line-height:15px;  mso-text-raise:1px'>Shopping List</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="display: block; border-width: 1px; background: #ffffff; border-color: #8c0020;"><a href="https://viewstripo.email" class="es-button msohide" target="_blank" style="padding-left: 5px; padding-right: 5px; display: block; background: #ffffff; color: #8c0020; mso-border-alt: 10px solid #ffffff">Shopping List</a></span><!--<![endif]--></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--></td></tr><tr class="ui-draggable"><td class="esd-structure es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="520" class="esd-container-frame esd-frame esd-hover esdev-disable-select" align="center" valign="top" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-spacer es-p20t es-p20b es-p30r es-p30l es-m-p0r es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" style="font-size:0" esd-handler-name="spacerBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"><tbody><tr><td style="border-bottom: 1px solid #0d2940; background: unset; height: 1px; width: 100%; margin: 0px;"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="ui-draggable"><td class="esd-structure es-p20t es-p5b es-p20r es-p20l es-m-p10b esd-frame esd-hover esdev-disable-select" align="left" esdev-eq="false" esd-custom-block-id="1074932" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="50" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" align="left" class="es-left"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="30" class="esd-container-frame es-m-p20b esd-frame esd-hover esdev-disable-select" align="center" valign="top" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="esd-mobile-hidden ui-draggable"><td align="center" class="esd-block-spacer esd-frame esd-hover esdev-disable-select esd-draggable esd-block esd-hidden-element" height="40" esd-handler-name="spacerBlockHandler" title="Hidden on mobile"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><div class="esd-hidden-status"><span class="es-icon-hide-on-mobile"></span></div><div class="esd-spacer-resizer">40px<span class="es-icon-devider"></span></div></td></tr></tbody></table></td><td class="es-hidden" width="20"></td></tr></tbody></table><!--[if mso]></td><td width="460" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="460" align="left" class="esd-container-frame esd-frame esd-hover esdev-disable-select" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%" bgcolor="#fef8f2" style="background-color: #fef8f2; border-radius: 10px; border-collapse: separate;"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-text es-p15 es-m-txt-c esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><h2>Cooking Tips 💎</h2></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td><td width="20"></td><td width="30" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="30" align="left" class="esd-container-frame esd-frame esd-hover esdev-disable-select" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="esd-mobile-hidden ui-draggable"><td align="center" class="esd-block-spacer esd-frame esd-hover esdev-disable-select esd-draggable esd-block esd-hidden-element" height="40" esd-handler-name="spacerBlockHandler" title="Hidden on mobile"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><div class="esd-hidden-status"><span class="es-icon-hide-on-mobile"></span></div><div class="esd-spacer-resizer">40px<span class="es-icon-devider"></span></div></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--></td></tr><tr class="ui-draggable"><td class="esd-structure es-p20b es-p35r es-p35l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-custom-block-id="1074933" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><table width="530" cellpadding="0" cellspacing="0"><tr><td width="35" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="30" class="esd-container-frame es-m-p10b esd-frame esd-hover esdev-disable-select" align="center" valign="top" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="esd-mobile-hidden ui-draggable"><td align="center" class="esd-block-spacer esd-frame esd-hover esdev-disable-select esd-draggable esd-block esd-hidden-element" height="40" esd-handler-name="spacerBlockHandler" title="Hidden on mobile"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><div class="esd-hidden-status"><span class="es-icon-hide-on-mobile"></span></div><div class="esd-spacer-resizer">40px<span class="es-icon-devider"></span></div></td></tr></tbody></table></td><td class="es-hidden" width="5"></td></tr></tbody></table><!--[if mso]></td><td width="155" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="150" class="es-m-p10b esd-container-frame esd-frame esd-hover esdev-disable-select" align="center" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%" bgcolor="#fef8f2" style="background-color: #fef8f2; border-radius: 10px; border-collapse: separate;"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="left" class="esd-block-text es-p10 esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><p>✔︎</p> <p style="font-size: 14px;">Soak the oats in water before mixing with the lamb for a smoother texture</p></td></tr></tbody></table></td><td class="es-hidden" width="5"></td></tr></tbody></table><!--[if mso]></td><td width="155" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="150" class="es-m-p10b esd-container-frame esd-frame esd-hover esdev-disable-select" align="center" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%" bgcolor="#fef8f2" style="background-color: #fef8f2; border-radius: 10px; border-collapse: separate;"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="left" class="esd-block-text es-p10 esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><p>✔︎</p> <p style="font-size: 14px;">Let the broth simmer slowly to allow the flavors to meld together</p></td></tr></tbody></table></td><td class="es-hidden" width="5"></td></tr></tbody></table><!--[if mso]></td><td width="150" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="150" class="es-m-p20b esd-container-frame esd-frame esd-hover esdev-disable-select" align="center" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%" bgcolor="#fef8f2" style="background-color: #fef8f2; border-radius: 10px; border-collapse: separate;"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="left" class="esd-block-text es-p10 esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><p>✔︎</p> <p style="font-size: 14px;">Toast the oats until they're golden brown for that perfect crunch</p></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td><td width="5"></td><td width="30" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="30" align="left" class="esd-container-frame esd-frame esd-hover esdev-disable-select" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="esd-mobile-hidden ui-draggable"><td align="center" class="esd-block-spacer esd-frame esd-hover esdev-disable-select esd-draggable esd-block esd-hidden-element" height="40" esd-handler-name="spacerBlockHandler" title="Hidden on mobile"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><div class="esd-hidden-status"><span class="es-icon-hide-on-mobile"></span></div><div class="esd-spacer-resizer">40px<span class="es-icon-devider"></span></div></td></tr></tbody></table></td></tr></tbody></table><!--[if mso]></td></tr></table><![endif]--></td></tr><tr class="ui-draggable"><td class="esd-structure es-p10t es-p30b es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-custom-block-id="1074934" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td width="520" class="esd-container-frame esd-frame esd-hover esdev-disable-select" align="center" valign="top" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-button es-p30r es-p30l es-m-p0r es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-handler-name="btnBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><!--[if mso]><a href="https://viewstripo.email" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email" 
                style="height:41px; v-text-anchor:middle; width:460px" arcsize="50%" stroke="f"  fillcolor="#8c0020">
		<w:anchorlock></w:anchorlock>
		<center style='color:#ffffff; font-family:Manrope, Arial, sans-serif; font-size:15px; font-weight:400; line-height:15px;  mso-text-raise:1px'>Start Cooking Burns Night Delicacies</center>
	</v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border" style="display: block;"><a href="https://viewstripo.email" class="es-button msohide" target="_blank" style="padding-left: 5px; padding-right: 5px; display: block;">Start Cooking Burns Night Delicacies</a></span><!--<![endif]--></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-footer ui-draggable" align="center"><tbody><tr><td class="esd-stripe esd-frame esd-hover esdev-disable-select" align="center" esd-custom-block-id="1074713" esd-handler-name="stripeBlockHandler">
            <div class="esd-structure-type">
                    
        
            Stripe - Footer
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div>
            <div class="esd-add-stripe">
                <a><span class="es-icon-plus"></span></a>
                <div class="esd-stripes-popover esd-hidden-right">
                    <div class="esd-popover-content">
                        
                                <div class="esd-stripe-preview" esd-element-name="structureType_100">
                                    
            <div class="col-xs-12">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_50_50">
                                    
            <div class="col-xs-6">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-6">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_33_33_33">
                                    
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_25_25_25_25">
                                    
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_33_66">
                                    
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-8">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_66_33">
                                    
            <div class="col-xs-8">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                    </div>
                </div>
            </div>
        <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody class="ui-droppable"><tr class="ui-draggable"><td class="esd-structure es-p30t es-p30b es-p40r es-p40l es-m-p20r es-m-p20l esd-frame esd-hover esdev-disable-select" align="left" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete" disabled="disabled">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellspacing="0" cellpadding="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td class="esd-container-frame esd-frame esd-hover esdev-disable-select" width="520" align="left" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table width="100%" cellspacing="0" cellpadding="0"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-social es-p10t es-p10b esd-frame esd-hover esdev-disable-select esd-draggable esd-block" style="font-size:0" esd-handler-name="socialBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social"><tbody><tr><td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-gray/facebook-circle-gray.png" alt="Fb" title="Facebook" width="24" height="24"></a></td><td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-gray/instagram-circle-gray.png" alt="Ig" title="Instagram" width="24" height="24"></a></td><td align="center" valign="top" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-gray/youtube-circle-gray.png" alt="Yt" title="Youtube" width="24" height="24"></a></td><td align="center" valign="top" width="null" esd-tmp-icon-type="twitter" class="es-p20r"><a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-gray/x-circle-gray.png" alt="X" title="X.com" width="24" height="24"></a></td><td align="center" valign="top" width="null" esd-tmp-icon-type="tiktok"><a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/circle-gray/tiktok-circle-gray.png" alt="Tt" title="TikTok" width="24" height="24"></a></td></tr></tbody></table></td></tr><tr class="ui-draggable"><td align="center" class="esd-block-text es-p10t es-p10b es-p30r es-p30l es-m-p0r es-m-p0l esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-links-color="#cccccc" esd-links-underline="none" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><p>If you have any questions or need further assistance, our friendly customer support team is here to help. You can reach us at <strong><a target="_blank" style="color: #cccccc; text-decoration: none;" href="mailto:tastytales@com">tastytales@com</a></strong></p></td></tr><tr class="ui-draggable"><td align="center" class="esd-block-text es-p15t es-p25b esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-links-color="#333333" esd-links-underline="none" esd-handler-name="textElementHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><p>123 Baker Street, Suite 202</p></td></tr><tr class="ui-draggable"><td class="esd-block-menu esd-frame esd-hover esdev-disable-select esd-draggable esd-block" esd-tmp-menu-color="#cccccc" esd-tmp-menu-padding="2|2" esd-tmp-divider="1|solid|#cccccc" esd-handler-name="menuBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellpadding="0" cellspacing="0" width="100%" class="es-menu"><tbody><tr class="links"><td align="center" valign="top" width="33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-0" style="padding-top: 2px; padding-bottom: 2px;"><a target="_blank" href="https://viewstripo.email" style="color: #cccccc;">Terms of use</a></td><td align="center" valign="top" width="33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-1" style="padding-top: 2px; padding-bottom: 2px; border-left: 1px solid #cccccc;"><a target="_blank" href="https://viewstripo.email" style="color: #cccccc;">Privacy Policy</a></td><td align="center" valign="top" width="33%" class="es-p10t es-p10b es-p5r es-p5l" id="esd-menu-id-2" style="padding-top: 2px; padding-bottom: 2px; border-left: 1px solid #cccccc;"><a target="_blank" href="https://" style="color: #cccccc;">Unsubscribe</a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table class="esd-footer-popover es-footer ui-draggable" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td class="esd-stripe esd-frame esd-hover esdev-disable-select" align="center" esd-handler-name="stripeBlockHandler">
            <div class="esd-structure-type">
                    
        
            Stripe - Footer
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div>
            <div class="esd-add-stripe">
                <a><span class="es-icon-plus"></span></a>
                <div class="esd-stripes-popover esd-hidden-right">
                    <div class="esd-popover-content">
                        
                                <div class="esd-stripe-preview" esd-element-name="structureType_100">
                                    
            <div class="col-xs-12">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_50_50">
                                    
            <div class="col-xs-6">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-6">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_33_33_33">
                                    
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_25_25_25_25">
                                    
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-3">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_33_66">
                                    
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-8">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                                <div class="esd-stripe-preview" esd-element-name="structureType_66_33">
                                    
            <div class="col-xs-8">
                <a class="esd-structure-preview"></a>
            </div>
            <div class="col-xs-4">
                <a class="esd-structure-preview"></a>
            </div>
                                </div>
                    </div>
                </div>
            </div>
        <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"><tbody class="ui-droppable"><tr class="ui-draggable"><td class="esd-structure es-p40 esd-frame esd-hover esdev-disable-select" align="left" esd-handler-name="structureBlockHandler">
            <div class="esd-structure-type">
                    
        
            Structure
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete" disabled="disabled">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table cellspacing="0" cellpadding="0" width="100%"><tbody class="ui-droppable"><tr class="ui-draggable"><td class="esd-container-frame esd-frame esd-hover esdev-disable-select" width="520" align="left" esd-handler-name="containerHandler">
            <div class="esd-structure-type">
                    
        
            Container
        
            </div><div class="esd-block-btn 
                        
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
            <div class="esd-save" title="Save as module">
                <a><span class="es-icon-save"></span></a></div>
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><table width="100%" cellspacing="0" cellpadding="0"><tbody class="ui-droppable"><tr class="ui-draggable"><td align="center" class="esd-block-image es-infoblock made_with esd-frame esd-hover esdev-disable-select esd-draggable esd-block" style="font-size:0" esd-handler-name="imgBlockHandler"><div class="esd-block-btn 
                        esd-no-block-library
                        ">
                    <div class="esd-more"><a><span class="es-icon-dot-3"></span></a></div>
                    
                    
                    <div class="esd-move ui-draggable-handle" title="Move">
                        <a><span class="es-icon-move"></span></a>
                    </div>
                    <div class="esd-copy ui-draggable-handle" title="Copy">
                        <a><span class="es-icon-copy"></span></a>
                    </div>
                    
                    <div class="esd-delete" title="Delete">
                        <a><span class="es-icon-delete"></span></a>
                    </div>
                </div><a target="_blank" href="https://viewstripo.email/?utm_source=templates&amp;utm_medium=email&amp;utm_campaign=burns_night_2&amp;utm_content=burns_night_recipes"><img src="https://tlr.stripocdn.email/content/guids/CABINET_09023af45624943febfa123c229a060b/images/7911561025989373.png" alt="" width="125" style="display: block;"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></body></html>
`