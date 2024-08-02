'use client';
import { useEffect, useCallback, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadTrianglesPreset } from "@tsparticles/preset-triangles";


const ParticlesBackground = () => {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadTrianglesPreset(engine);
    }).then(() => {
      setInit(true);
    })

  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  }

  const options = useMemo(() => {
    return {

      preset: "triangles",

      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },

      },
      background: {
        opacity: 0
      },
      particles: {
        color: "#9b59b6",
        opacity: 0.6,
        number: {
          density: {
            enable: true,
          },
          value: 75,
        },
        move: {
          enable: true,
          speed: 4,
          random: false,

        },
        links: {
          triangles: {

            color: '#ffffff',
            opacity: 0.2
          },

          distance: 150,
          color: "#6e3d7a",
          width: 1,
          opacity: 0.6
        },
      },
      detectRetina: true,
    }
  }, []);

  return (
    <>
      {init && <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        className="-z-50"
        options={options}
      />
      }
    </>
  );
}

export default ParticlesBackground