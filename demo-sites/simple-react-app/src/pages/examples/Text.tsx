export function Text() {
  return (
    <div className="w-full">
      <DemoTextGroup
        name="Font Sizes"
        classMatrix={[
          'text-xs',
          'text-sm',
          'text-base',
          'text-lg',
          'text-xl',
          'text-2xl',
        ]}
      />
      <DemoTextGroup
        name="Font Weights"
        classMatrix={[
          'font-light',
          'font-normal',
          'font-medium',
          'font-semibold',
          'font-bold',
        ]}
      />
      <DemoTextGroup
        name="Font Smoothing"
        classMatrix={[
          'text-xs font-light antialiased',
          'text-xs font-light subpixel-antialiased',
          'text-medium font-normal antialiased',
          'text-medium font-normal subpixel-antialiased',
          'text-2xl font-bold antialiased',
          'text-2xl font-bold subpixel-antialiased',
        ]}
      />
      <DemoTextGroup
        name="Font Stretch"
        classMatrix={[
          'font-stretch-extra-condensed',
          'font-stretch-condensed',
          'font-stretch-normal',
          'font-stretch-expanded',
          'font-stretch-extra-expanded',
        ]}
      />
      <DemoTextGroup
        name="Font Style/Decoration"
        classMatrix={[
          'text-xs italic',
          'text-xs underline',
          'text-medium italic',
          'text-medium underline',
          'text-2xl italic',
          'text-2xl underline',
        ]}
      />
      <DemoTextGroup
        name="Letter spacing"
        classMatrix={[
          'tracking-tight',
          'tracking-normal',
          'tracking-wide',
        ]}
      />
    </div>
  )
}



function DemoTextGroup({ name, className = '', classMatrix }: {
  name: string;
  classMatrix: string[];
  className?: string;
}) {
  return (
    <div className='flex'>
      <span className='text-xl font-bold w-60 flex-none'>{name}</span>

      <div className='flex-1'>
        {classMatrix.map((variantClass) => (
          <p key={variantClass} className={variantClass + className}>The quick brown fox jumps over the lazy dog.</p>
        ))}
      </div>
    </div>
  )
}
