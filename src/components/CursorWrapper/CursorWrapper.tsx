import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap-trial";
import "./CursorWrapper.scss";

const Circle = forwardRef(({ size, delay }: any, ref) => {
  const el = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x: any, y: any) {
          gsap.to(el.current, { x, y, delay });
        },
      };
    },
    [delay]
  );

  return <div className={`circle ${size}`} ref={el}></div>;
});

export const CursorWrapper = () => {
  const circleRefs = useRef([]);

  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    circleRefs.current.forEach((ref) =>
      ref.moveTo(window.innerWidth / 2, window.innerHeight / 2)
    );

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref: any) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return (
    <div>
      <Circle size="sm" ref={addCircleRef} delay={0} />
      <Circle size="md" ref={addCircleRef} delay={0.1} />
      <Circle size="lg" ref={addCircleRef} delay={0.2} />
    </div>
  );
};
