"use client";

import React, { useEffect, useRef } from 'react';

declare const gsap: any;
declare const THREE: any;

export function Component() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- DYNAMIC SCRIPT LOADING ---
    const loadScripts = async () => {
      const loadScript = (src: string, globalName: string) => new Promise<void>((res, rej) => {
        if ((window as any)[globalName]) { res(); return; }
        if (document.querySelector(`script[src="${src}"]`)) {
          const check = setInterval(() => {
            if ((window as any)[globalName]) { clearInterval(check); res(); }
          }, 50);
          setTimeout(() => { clearInterval(check); rej(new Error(`Timeout waiting for ${globalName}`)); }, 10000);
          return;
        }
        const s = document.createElement('script');
        s.src = src;
        s.onload = () => { setTimeout(() => res(), 100); };
        s.onerror = () => rej(new Error(`Failed to load ${src}`));
        document.head.appendChild(s);
      });

      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', 'gsap');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', 'THREE');
      } catch (e) {
        console.error('Failed to load base scripts:', e);
      }

      initApplication();
    };

    const initApplication = async () => {
        // --- PRELOADER REMOVED ---

        // --- MAIN LOGIC ---
        const SLIDER_CONFIG: any = {
            settings: {
                transitionDuration: 2.5, autoSlideSpeed: 5000, currentEffect: "glass", currentEffectPreset: "Default",
                globalIntensity: 1.0, speedMultiplier: 1.0, distortionStrength: 1.0, colorEnhancement: 1.0,
                glassRefractionStrength: 1.0, glassChromaticAberration: 1.0, glassBubbleClarity: 1.0, glassEdgeGlow: 1.0, glassLiquidFlow: 1.0,
                frostIntensity: 1.5, frostCrystalSize: 1.0, frostIceCoverage: 1.0, frostTemperature: 1.0, frostTexture: 1.0,
                rippleFrequency: 25.0, rippleAmplitude: 0.08, rippleWaveSpeed: 1.0, rippleRippleCount: 1.0, rippleDecay: 1.0,
                plasmaIntensity: 1.2, plasmaSpeed: 0.8, plasmaEnergyIntensity: 0.4, plasmaContrastBoost: 0.3, plasmaTurbulence: 1.0,
                timeshiftDistortion: 1.6, timeshiftBlur: 1.5, timeshiftFlow: 1.4, timeshiftChromatic: 1.5, timeshiftTurbulence: 1.4
            },
            effectPresets: {
                glass: { Subtle: { glassRefractionStrength: 0.6, glassChromaticAberration: 0.5, glassBubbleClarity: 1.3, glassEdgeGlow: 0.7, glassLiquidFlow: 0.8 }, Default: { glassRefractionStrength: 1.0, glassChromaticAberration: 1.0, glassBubbleClarity: 1.0, glassEdgeGlow: 1.0, glassLiquidFlow: 1.0 }, Crystal: { glassRefractionStrength: 1.5, glassChromaticAberration: 1.8, glassBubbleClarity: 0.7, glassEdgeGlow: 1.4, glassLiquidFlow: 0.5 }, Liquid: { glassRefractionStrength: 0.8, glassChromaticAberration: 0.4, glassBubbleClarity: 1.2, glassEdgeGlow: 0.8, glassLiquidFlow: 1.8 } },
                frost: { Light: { frostIntensity: 0.8, frostCrystalSize: 1.3, frostIceCoverage: 0.6, frostTemperature: 0.7, frostTexture: 0.8 }, Default: { frostIntensity: 1.5, frostCrystalSize: 1.0, frostIceCoverage: 1.0, frostTemperature: 1.0, frostTexture: 1.0 }, Heavy: { frostIntensity: 2.2, frostCrystalSize: 0.7, frostIceCoverage: 1.4, frostTemperature: 1.5, frostTexture: 1.3 }, Arctic: { frostIntensity: 2.8, frostCrystalSize: 0.5, frostIceCoverage: 1.8, frostTemperature: 2.0, frostTexture: 1.6 } },
                ripple: { Gentle: { rippleFrequency: 15.0, rippleAmplitude: 0.05, rippleWaveSpeed: 0.7, rippleRippleCount: 0.8, rippleDecay: 1.2 }, Default: { rippleFrequency: 25.0, rippleAmplitude: 0.08, rippleWaveSpeed: 1.0, rippleRippleCount: 1.0, rippleDecay: 1.0 }, Strong: { rippleFrequency: 35.0, rippleAmplitude: 0.12, rippleWaveSpeed: 1.4, rippleRippleCount: 1.3, rippleDecay: 0.8 }, Tsunami: { rippleFrequency: 45.0, rippleAmplitude: 0.18, rippleWaveSpeed: 1.8, rippleRippleCount: 1.6, rippleDecay: 0.6 } },
                plasma: { Calm: { plasmaIntensity: 0.8, plasmaSpeed: 0.5, plasmaEnergyIntensity: 0.2, plasmaContrastBoost: 0.1, plasmaTurbulence: 0.6 }, Default: { plasmaIntensity: 1.2, plasmaSpeed: 0.8, plasmaEnergyIntensity: 0.4, plasmaContrastBoost: 0.3, plasmaTurbulence: 1.0 }, Storm: { plasmaIntensity: 1.8, plasmaSpeed: 1.3, plasmaEnergyIntensity: 0.7, plasmaContrastBoost: 0.5, plasmaTurbulence: 1.5 }, Nuclear: { plasmaIntensity: 2.5, plasmaSpeed: 1.8, plasmaEnergyIntensity: 1.0, plasmaContrastBoost: 0.8, plasmaTurbulence: 2.0 } },
                timeshift: { Subtle: { timeshiftDistortion: 0.5, timeshiftBlur: 0.6, timeshiftFlow: 0.5, timeshiftChromatic: 0.4, timeshiftTurbulence: 0.6 }, Default: { timeshiftDistortion: 1.6, timeshiftBlur: 1.5, timeshiftFlow: 1.4, timeshiftChromatic: 1.5, timeshiftTurbulence: 1.4 }, Intense: { timeshiftDistortion: 2.2, timeshiftBlur: 2.0, timeshiftFlow: 2.0, timeshiftChromatic: 2.2, timeshiftTurbulence: 2.0 }, Dreamlike: { timeshiftDistortion: 2.8, timeshiftBlur: 2.5, timeshiftFlow: 2.5, timeshiftChromatic: 2.6, timeshiftTurbulence: 2.5 } }
            }
        };

        // --- GLOBAL STATE ---
        let currentSlideIndex = 0;
        let isTransitioning = false;
        let shaderMaterial: any, renderer: any, scene: any, camera: any;
        let slideTextures: any[] = [];
        let texturesLoaded = false;
        let autoSlideTimer: any = null;
        let progressAnimation: any = null;
        let sliderEnabled = false;

        const SLIDE_DURATION = () => SLIDER_CONFIG.settings.autoSlideSpeed;
        const PROGRESS_UPDATE_INTERVAL = 50;
        const TRANSITION_DURATION = () => SLIDER_CONFIG.settings.transitionDuration;

        const slides = [
            { media: "/videos/claude-demo.mp4" },
            { media: "/videos/intro-video.mp4" },
            { media: "/videos/keep-thinking.mp4" },
            { media: "/videos/curiosity-1.mp4" },
            { media: "/videos/curiosity-2.mp4" }
        ];

        // --- SHADERS ---
        const vertexShader = `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
        const fragmentShader = `
            uniform sampler2D uTexture1, uTexture2;
            uniform float uProgress;
            uniform vec2 uResolution, uTexture1Size, uTexture2Size;
            uniform int uEffectType;
            uniform float uGlobalIntensity, uSpeedMultiplier, uDistortionStrength, uColorEnhancement;
            uniform float uGlassRefractionStrength, uGlassChromaticAberration, uGlassBubbleClarity, uGlassEdgeGlow, uGlassLiquidFlow;
            uniform float uFrostIntensity, uFrostCrystalSize, uFrostIceCoverage, uFrostTemperature, uFrostTexture;
            uniform float uRippleFrequency, uRippleAmplitude, uRippleWaveSpeed, uRippleRippleCount, uRippleDecay;
            uniform float uPlasmaIntensity, uPlasmaSpeed, uPlasmaEnergyIntensity, uPlasmaContrastBoost, uPlasmaTurbulence;
            uniform float uTimeshiftDistortion, uTimeshiftBlur, uTimeshiftFlow, uTimeshiftChromatic, uTimeshiftTurbulence;
            varying vec2 vUv;

            vec2 getCoverUV(vec2 uv, vec2 textureSize) {
                vec2 s = uResolution / textureSize;
                float scale = max(s.x, s.y);
                vec2 scaledSize = textureSize * scale;
                vec2 offset = (uResolution - scaledSize) * 0.5;
                return (uv * uResolution - offset) / scaledSize;
            }
            float noise(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

            vec4 glassEffect(vec2 uv, float progress) {
                float time = progress * 5.0 * uSpeedMultiplier;
                vec2 uv1 = getCoverUV(uv, uTexture1Size); vec2 uv2 = getCoverUV(uv, uTexture2Size);
                float maxR = length(uResolution) * 0.85; float br = progress * maxR;
                vec2 p = uv * uResolution; vec2 c = uResolution * 0.5;
                float d = length(p - c); float nd = d / max(br, 0.001);
                float param = smoothstep(br + 3.0, br - 3.0, d); // Inside circle
                vec4 img;
                if (param > 0.0) {
                     float ro = 0.08 * uGlassRefractionStrength * uDistortionStrength * uGlobalIntensity * pow(smoothstep(0.3 * uGlassBubbleClarity, 1.0, nd), 1.5);
                     vec2 dir = (d > 0.0) ? (p - c) / d : vec2(0.0);
                     vec2 distUV = uv2 - dir * ro;
                     distUV += vec2(sin(time + nd * 10.0), cos(time * 0.8 + nd * 8.0)) * 0.015 * uGlassLiquidFlow * uSpeedMultiplier * nd * param;
                     float ca = 0.02 * uGlassChromaticAberration * uGlobalIntensity * pow(smoothstep(0.3, 1.0, nd), 1.2);
                     img = vec4(texture2D(uTexture2, distUV + dir * ca * 1.2).r, texture2D(uTexture2, distUV + dir * ca * 0.2).g, texture2D(uTexture2, distUV - dir * ca * 0.8).b, 1.0);
                     if (uGlassEdgeGlow > 0.0) {
                        float rim = smoothstep(0.95, 1.0, nd) * (1.0 - smoothstep(1.0, 1.01, nd));
                        img.rgb += rim * 0.08 * uGlassEdgeGlow * uGlobalIntensity;
                     }
                } else { img = texture2D(uTexture2, uv2); }
                vec4 oldImg = texture2D(uTexture1, uv1);
                if (progress > 0.95) img = mix(img, texture2D(uTexture2, uv2), (progress - 0.95) / 0.05);
                return mix(oldImg, img, param);
            }
            // Simplified stubs for other effects (to save space, logic is in glassEffect mainly for demo)
            vec4 frostEffect(vec2 uv, float progress) { return mix(texture2D(uTexture1, getCoverUV(uv, uTexture1Size)), texture2D(uTexture2, getCoverUV(uv, uTexture2Size)), progress); }
            vec4 rippleEffect(vec2 uv, float progress) { return mix(texture2D(uTexture1, getCoverUV(uv, uTexture1Size)), texture2D(uTexture2, getCoverUV(uv, uTexture2Size)), progress); }
            vec4 plasmaEffect(vec2 uv, float progress) { return mix(texture2D(uTexture1, getCoverUV(uv, uTexture1Size)), texture2D(uTexture2, getCoverUV(uv, uTexture2Size)), progress); }
            vec4 timeshiftEffect(vec2 uv, float progress) { return mix(texture2D(uTexture1, getCoverUV(uv, uTexture1Size)), texture2D(uTexture2, getCoverUV(uv, uTexture2Size)), progress); }

            void main() {
                if (uEffectType == 0) gl_FragColor = glassEffect(vUv, uProgress);
                else if (uEffectType == 1) gl_FragColor = frostEffect(vUv, uProgress);
                else if (uEffectType == 2) gl_FragColor = rippleEffect(vUv, uProgress);
                else if (uEffectType == 3) gl_FragColor = plasmaEffect(vUv, uProgress);
                else gl_FragColor = timeshiftEffect(vUv, uProgress);
            }
        `;

        // --- CORE FUNCTIONS ---
        const getEffectIndex = (n: string) => ({ glass: 0, frost: 1, ripple: 2, plasma: 3, timeshift: 4 } as any)[n] || 0;

        const updateShaderUniforms = () => {
             if (!shaderMaterial) return;
             const s = SLIDER_CONFIG.settings, u = shaderMaterial.uniforms;
             for (const key in s) {
                 const uName = 'u' + key.charAt(0).toUpperCase() + key.slice(1);
                 if (u[uName]) u[uName].value = s[key];
             }
             u.uEffectType.value = getEffectIndex(s.currentEffect);
        };


        const navigateToSlide = (targetIndex: number) => {
            if (targetIndex === currentSlideIndex) return;

            // If mid-transition, kill current animation and snap to its target
            if (isTransitioning) {
                gsap.killTweensOf(shaderMaterial.uniforms.uProgress);
                shaderMaterial.uniforms.uProgress.value = 0;
                shaderMaterial.uniforms.uTexture1.value = slideTextures[currentSlideIndex];
                shaderMaterial.uniforms.uTexture1Size.value = slideTextures[currentSlideIndex].userData.size;
                isTransitioning = false;
            }

            stopAutoSlideTimer();

            const currentTexture = slideTextures[currentSlideIndex];
            const targetTexture = slideTextures[targetIndex];
            if (!currentTexture || !targetTexture) return;

            isTransitioning = true;
            shaderMaterial.uniforms.uTexture1.value = currentTexture;
            shaderMaterial.uniforms.uTexture2.value = targetTexture;
            shaderMaterial.uniforms.uTexture1Size.value = currentTexture.userData.size;
            shaderMaterial.uniforms.uTexture2Size.value = targetTexture.userData.size;

            currentSlideIndex = targetIndex;
            updateNavigationState(currentSlideIndex);
            updateButtonStates(currentSlideIndex);

            gsap.fromTo(shaderMaterial.uniforms.uProgress,
                { value: 0 },
                {
                    value: 1,
                    duration: TRANSITION_DURATION(),
                    ease: "power2.inOut",
                    onComplete: () => {
                        shaderMaterial.uniforms.uProgress.value = 0;
                        shaderMaterial.uniforms.uTexture1.value = targetTexture;
                        shaderMaterial.uniforms.uTexture1Size.value = targetTexture.userData.size;
                        isTransitioning = false;

                        updateButtonStates(currentSlideIndex);

                        safeStartTimer(100);
                    }
                }
            );
        };

        const handleSlideChange = () => {
            if (isTransitioning || !texturesLoaded || !sliderEnabled) return;
            navigateToSlide((currentSlideIndex + 1) % slides.length);
        };

        const createProgressIndicator = () => {
            const indicator = document.getElementById("progressIndicator");
            if (!indicator) return;
            indicator.innerHTML = "";
            slides.forEach((slide, i) => {
                const dot = document.createElement("button");
                dot.className = `h-2 rounded-full transition-all ${i === 0 ? 'w-8 bg-white' : 'w-2 bg-white/50'}`;
                dot.addEventListener("click", (e) => {
                    e.stopPropagation();
                    if (i !== currentSlideIndex) {
                         stopAutoSlideTimer();
                         navigateToSlide(i);
                    }
                });
                indicator.appendChild(dot);
            });
        };

        const updateNavigationState = (idx: number) => {
            const dots = document.querySelectorAll("#progressIndicator button");
            dots.forEach((dot, i) => {
                if (i === idx) {
                    dot.className = 'h-2 rounded-full transition-all w-8 bg-white';
                } else {
                    dot.className = 'h-2 rounded-full transition-all w-2 bg-white/50';
                }
            });
        };

        const updateButtonStates = (_idx: number) => {
            const prevButton = document.getElementById("prevButton");
            const nextButton = document.getElementById("nextButton");
            if (prevButton) {
                prevButton.style.opacity = '';
                prevButton.style.pointerEvents = '';
                prevButton.className = "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 bg-white hover:scale-110 hover:opacity-100 opacity-70";
            }
            if (nextButton) {
                nextButton.style.opacity = '';
                nextButton.style.pointerEvents = '';
                nextButton.className = "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 bg-white hover:scale-110 hover:opacity-100 opacity-70";
            }
        };

        const startAutoSlideTimer = () => {
             if (!texturesLoaded || !sliderEnabled) return;
             stopAutoSlideTimer();
             let progress = 0;
             const increment = (100 / SLIDE_DURATION()) * PROGRESS_UPDATE_INTERVAL;
             progressAnimation = setInterval(() => {
                 if (!sliderEnabled) { stopAutoSlideTimer(); return; }
                 progress += increment;
                 if (progress >= 100) {
                     clearInterval(progressAnimation); progressAnimation = null;
                     if (!isTransitioning) handleSlideChange();
                 }
             }, PROGRESS_UPDATE_INTERVAL);
        };
        const stopAutoSlideTimer = () => { if (progressAnimation) clearInterval(progressAnimation); if (autoSlideTimer) clearTimeout(autoSlideTimer); progressAnimation = null; autoSlideTimer = null; };
        const safeStartTimer = (delay = 0) => { stopAutoSlideTimer(); if (sliderEnabled && texturesLoaded) { if (delay > 0) autoSlideTimer = setTimeout(startAutoSlideTimer, delay); else startAutoSlideTimer(); } };

        const loadVideoTexture = (src: string) => new Promise<any>((resolve, reject) => {
            const video = document.createElement('video');
            video.src = src;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.crossOrigin = 'anonymous';

            video.addEventListener('loadedmetadata', () => {
                video.play().catch(console.warn);
                const texture = new THREE.VideoTexture(video);
                texture.minFilter = texture.magFilter = THREE.LinearFilter;
                texture.format = THREE.RGBFormat;
                texture.userData = { size: new THREE.Vector2(video.videoWidth || 1920, video.videoHeight || 1080) };
                resolve(texture);
            });

            video.addEventListener('error', reject);
            video.load();
        });

        const initRenderer = async () => {
            const canvas = document.querySelector(".webgl-canvas") as HTMLCanvasElement; if (!canvas) return;
            const container = document.querySelector(".slider-wrapper") as HTMLElement;
            const containerWidth = container?.offsetWidth || 800;
            const containerHeight = 500; // Fixed height matching CSS

            scene = new THREE.Scene(); camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
            renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false });
            renderer.setSize(containerWidth, containerHeight); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            shaderMaterial = new THREE.ShaderMaterial({
                uniforms: {
                    uTexture1: { value: null }, uTexture2: { value: null }, uProgress: { value: 0 },
                    uResolution: { value: new THREE.Vector2(containerWidth, containerHeight) },
                    uTexture1Size: { value: new THREE.Vector2(1, 1) }, uTexture2Size: { value: new THREE.Vector2(1, 1) },
                    uEffectType: { value: 0 },
                    uGlobalIntensity: { value: 1.0 }, uSpeedMultiplier: { value: 1.0 }, uDistortionStrength: { value: 1.0 }, uColorEnhancement: { value: 1.0 },
                    uGlassRefractionStrength: { value: 1.0 }, uGlassChromaticAberration: { value: 1.0 }, uGlassBubbleClarity: { value: 1.0 }, uGlassEdgeGlow: { value: 1.0 }, uGlassLiquidFlow: { value: 1.0 },
                    // Init others defaults
                    uFrostIntensity: { value: 1.0 }, uFrostCrystalSize: { value: 1.0 }, uFrostIceCoverage: { value: 1.0 }, uFrostTemperature: { value: 1.0 }, uFrostTexture: { value: 1.0 },
                    uRippleFrequency: { value: 25.0 }, uRippleAmplitude: { value: 0.08 }, uRippleWaveSpeed: { value: 1.0 }, uRippleRippleCount: { value: 1.0 }, uRippleDecay: { value: 1.0 },
                    uPlasmaIntensity: { value: 1.2 }, uPlasmaSpeed: { value: 0.8 }, uPlasmaEnergyIntensity: { value: 0.4 }, uPlasmaContrastBoost: { value: 0.3 }, uPlasmaTurbulence: { value: 1.0 },
                    uTimeshiftDistortion: { value: 1.6 }, uTimeshiftBlur: { value: 1.5 }, uTimeshiftFlow: { value: 1.4 }, uTimeshiftChromatic: { value: 1.5 }, uTimeshiftTurbulence: { value: 1.4 }
                },
                vertexShader, fragmentShader
            });
            scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), shaderMaterial));

            for (const s of slides) { try { slideTextures.push(await loadVideoTexture(s.media)); } catch { console.warn("Failed texture"); } }
            if (slideTextures.length >= 2) {
                shaderMaterial.uniforms.uTexture1.value = slideTextures[0];
                shaderMaterial.uniforms.uTexture2.value = slideTextures[1];
                shaderMaterial.uniforms.uTexture1Size.value = slideTextures[0].userData.size;
                shaderMaterial.uniforms.uTexture2Size.value = slideTextures[1].userData.size;
                texturesLoaded = true; sliderEnabled = true;
                updateShaderUniforms(); // Apply config
                document.querySelector(".slider-wrapper")?.classList.add("loaded"); // Fade in immediately
                safeStartTimer(500);
            }

            const render = () => { requestAnimationFrame(render); renderer.render(scene, camera); };
            render();
        };

        createProgressIndicator();

        // Add arrow button event listeners
        const prevButton = document.getElementById("prevButton");
        const nextButton = document.getElementById("nextButton");

        if (prevButton) {
            prevButton.onclick = () => {
                stopAutoSlideTimer();
                navigateToSlide((currentSlideIndex - 1 + slides.length) % slides.length);
            };
        }

        if (nextButton) {
            nextButton.onclick = () => {
                stopAutoSlideTimer();
                navigateToSlide((currentSlideIndex + 1) % slides.length);
            };
        }

        // Initialize button states
        updateButtonStates(0);

        initRenderer();

        // Listeners
        document.addEventListener("visibilitychange", () => document.hidden ? stopAutoSlideTimer() : (!isTransitioning && safeStartTimer()));
        window.addEventListener("resize", () => {
            if (renderer) {
                const container = document.querySelector(".slider-wrapper") as HTMLElement;
                const containerWidth = container?.offsetWidth || 800;
                const containerHeight = 500;
                renderer.setSize(containerWidth, containerHeight);
                shaderMaterial.uniforms.uResolution.value.set(containerWidth, containerHeight);
            }
        });
    };

    loadScripts();
    return () => {};
  }, []);

  return (
    <div className="lg:p-10 sm:p-4 p-2 max-w-4xl mx-auto">
      <div className="flex flex-col gap-3">
        <div className="max-w-[1000px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12 mx-auto">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl leading-[1.2] tracking-tight text-[#1a1a1a]">
              Your curiosity&apos;s collaborator
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-left">
              There&apos;s never been a worse time to be a problem, or a better time to be a problem solver.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg" ref={containerRef}>
          <main className="slider-wrapper">
            <canvas className="webgl-canvas"></canvas>
          </main>

          {/* Navigation Buttons */}
          <button
            id="prevButton"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 bg-white hover:scale-110 hover:opacity-100 opacity-70"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            id="nextButton"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 bg-white hover:scale-110 hover:opacity-100 opacity-70"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Progress Indicator */}
          <div id="progressIndicator" className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/20 rounded-xl border border-white/30"></div>
        </div>
      </div>
    </div>
  );
}