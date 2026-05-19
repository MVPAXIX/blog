import React from 'react';

export function SvgMask({ src, color, className, style, ...rest }) {
    const merged = {
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        ...style,
    };
    return <div aria-hidden="true" className={className} style={merged} {...rest} />;
}
