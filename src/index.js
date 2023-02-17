const { useState } = wp.element;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, Button } = wp.blockEditor;
const { TextControl, PanelBody } = wp.components;
const { __ } = wp.i18n;

registerBlockType('my-plugin/hero-section', {
    title: 'Hero Section',
    icon: 'layout',
    category: 'layout',
    attributes: {
        title: {
            type: 'string',
            default: '',
        },
        subtitle: {
            type: 'string',
            default: '',
        },
        backgroundImage: {
            type: 'string',
            default: '',
        },
        buttonUrl: {
            type: 'string',
            default: '',
        },
        buttonText: {
            type: 'string',
            default: 'Learn More',
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const [title, setTitle] = useState(attributes.title);
        const [subtitle, setSubtitle] = useState(attributes.subtitle);
        const [backgroundImage, setBackgroundImage] = useState(attributes.backgroundImage);
        const [buttonUrl, setButtonUrl] = useState(attributes.buttonUrl);
        const [buttonText, setButtonText] = useState(attributes.buttonText);

        const onBackgroundImageSelect = ( media ) => {
            setBackgroundImage(media.id)
            setAttributes( { backgroundImage: media.id } );
        };

        return (
            <div className="hero-section" style={{ backgroundImage: `url(${wp.media.attachment(backgroundImage).get('url')})` }}>
                <MediaUpload
                    onSelect={onBackgroundImageSelect}
                    allowedTypes={['image']}
                    value={backgroundImage}
                    render={({ open }) => (
                        <button onClick={open}>
                            {__('Select Background Image')}
                        </button>
                    )}
                />
                <RichText
                    tagName="h1"
                    value={title}
                    onChange={(value) => {
                        setTitle(value);
                        setAttributes({ title: value });
                    }}
                    placeholder={__('Enter title')}
                />
                <RichText
                    tagName="h2"
                    value={subtitle}
                    onChange={(value) => {
                        setSubtitle(value);
                        setAttributes({ subtitle: value });
                    }}
                    placeholder={__('Enter subtitle')}
                />
                <TextControl
                    label={__('Button URL')}
                    value={buttonUrl}
                    onChange={(value) => {
                        setButtonUrl(value);
                        setAttributes({ buttonUrl: value });
                    }}
                />
                <TextControl
                    label={__('Button Text')}
                    value={buttonText}
                    onChange={(value) => {
                        setButtonText(value);
                        setAttributes({ buttonText: value });
                    }}
                />
            </div>
        );
    },
    save: ({ attributes }) => {
        const { title, subtitle, backgroundImage, buttonUrl, buttonText } = attributes;
        return (
            <div className="hero-section" style={{ backgroundImage: `url(${wp.media.attachment(backgroundImage).get('url')})` }}>
                <div className="hero-section__content">
                    <h1 className={"bg-red text-green"}>{title}</h1>
                    <h2>{subtitle}</h2>
                    <button className="button" href={buttonUrl}>
                        {buttonText}
                    </button>
                </div>
            </div>
        );
    },
});
