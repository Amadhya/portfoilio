import React, { Suspense, lazy } from 'react';

const MotionDiv = lazy(() =>
  import('framer-motion').then(mod => ({
    default: mod.motion.div,
  })),
);

const AnimatedDiv = (props: any) => {
  const { className, children } = props;

  return (
    <Suspense fallback={<div className={className}>{children}</div>}>
      <MotionDiv {...props} />
    </Suspense>
  );
};

export default AnimatedDiv;
