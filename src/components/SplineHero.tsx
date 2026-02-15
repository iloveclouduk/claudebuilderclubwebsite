'use client';

export default function SplineHero() {
    return (
        <div className="w-full h-full relative">
            <iframe
                src='https://my.spline.design/animatedbackgroundgradientforweb-w1GOcGEG2ZPsyTRwrn59PrSI/'
                frameBorder='0'
                width='100%'
                height='100%'
                className="w-full h-full absolute inset-0 border-0"
                title="Spline 3D Background"
            />
            {/* Overlay to prevent scroll capturing if needed, or allow interaction */}
            <div className="absolute inset-0 pointer-events-none" />
        </div>
    );
}
