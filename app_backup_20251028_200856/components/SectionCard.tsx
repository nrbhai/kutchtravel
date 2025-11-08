"use client";

export default function SectionCard({
  title,
  bgClass = "bg-white/10 backdrop-blur-xl",
  borderClass = "border-gray-400",
  textClass = "text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-300",
  children,
  style,
}: {
  title: string;
  bgClass?: string;
  borderClass?: string;
  textClass?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <section className={`${bgClass} py-10 px-6 rounded-xl shadow-xl mb-6 border border-white/20`} style={style}>
      <h2
        className={`text-2xl font-sora font-bold mb-3 ${textClass} border-l-4 ${borderClass} pl-3`}
      >
        {title}
      </h2>
      <div className="font-poppins text-gray-100">{children}</div>
    </section>
  );
}

