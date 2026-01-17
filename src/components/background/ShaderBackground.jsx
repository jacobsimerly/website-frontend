import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";

export default function ShaderBackground({ enabled = false }) {
  if (!enabled) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <ShaderGradientCanvas
        style={{ position: "absolute", top: 0 }}
        pointerEvents="none"
        pixelDensity={1}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          bgColor1="#000000"
          bgColor2="#000000"
          brightness={1.5}
          cAzimuthAngle={180}
          cDistance={2.8}
          cPolarAngle={80}
          cameraZoom={9.1}
          color1="#121f3a"
          color2="#233a66"
          color3="#4b607f"
          destination="onCanvas"
          embedMode="off"
          envPreset="dawn"
          format="gif"
          fov={90}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="env"
          pixelDensity={1}
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={0}
          rotationY={0}
          rotationZ={0}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.5}
          uFrequency={0}
          uSpeed={0.1}
          uStrength={1.5}
          uTime={0}
          wireframe={false}
          toggleTransition={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
