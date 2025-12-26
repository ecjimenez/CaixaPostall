import svgPaths from "./svg-dn1ananfbf";
import clsx from "clsx";
import imgCapturaDeTela20251226As0224411 from "figma:asset/13f32adcddc09e9f6febd940ddd4207d848868c4.png";

function FtBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[333px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[24px] py-0 relative size-full">{children}</div>
    </div>
  );
}

function BtBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[64px] relative shrink-0 w-[333px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[24px] py-0 relative size-full">{children}</div>
    </div>
  );
}
type EeBackgroundImageProps = {
  additionalClassNames?: string;
};

function EeBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<EeBackgroundImageProps>) {
  return (
    <div className={clsx("relative rounded-[1.67772e+07px] shrink-0 size-[32px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return <BackgroundImage3 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage3>;
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return <BackgroundImage1 additionalClassNames={clsx("absolute size-[16px] top-[10px]", additionalClassNames)}>{children}</BackgroundImage1>;
}

function SdBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[14px] top-[4.81px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Sd">{children}</g>
      </svg>
    </div>
  );
}

function VectorBackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]">
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
          {children}
        </svg>
      </div>
    </div>
  );
}

function VectorBackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]">
      <div className="absolute inset-[-16.67%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 5.33333">
          {children}
        </svg>
      </div>
    </div>
  );
}
type IconBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImageProps>) {
  return (
    <BackgroundImage1 additionalClassNames={clsx("absolute size-[16px]", additionalClassNames)}>
      <g id="Icon">{children}</g>
    </BackgroundImage1>
  );
}

function GroupBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[84%_0.51%_16%_6.59%]">
      <div className="absolute inset-[-1px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 917 2">
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type VectorBackgroundImage2Props = {
  additionalClassNames?: string;
};

function VectorBackgroundImage2({ additionalClassNames = "" }: VectorBackgroundImage2Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
          <path d="M0 0.5H6" id="Vector" stroke="var(--stroke-0, #64748B)" style={{ stroke: "color(display-p3 0.3922 0.4549 0.5451)", strokeOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}
type VectorBackgroundImage1Props = {
  additionalClassNames?: string;
};

function VectorBackgroundImage1({ additionalClassNames = "" }: VectorBackgroundImage1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 917 1">
          <path d="M0 0.5H917" id="Vector" stroke="var(--stroke-0, #64748B)" style={{ stroke: "color(display-p3 0.3922 0.4549 0.5451)", strokeOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}
type VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function VectorBackgroundImage({ additionalClassNames = "" }: VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
          <path d="M0.5 6V0" id="Vector" stroke="var(--stroke-0, #64748B)" style={{ stroke: "color(display-p3 0.3922 0.4549 0.5451)", strokeOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}
type PrimitiveButtonBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function PrimitiveButtonBackgroundImageAndText({ text, additionalClassNames = "" }: PrimitiveButtonBackgroundImageAndTextProps) {
  return (
    <div className={clsx("content-stretch flex h-[29px] items-center justify-center px-[9px] py-[5px] relative rounded-[14px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center text-nowrap tracking-[-0.1504px]">{text}</p>
    </div>
  );
}
type EeBackgroundImageAndTextProps = {
  text: string;
};

function EeBackgroundImageAndText({ text }: EeBackgroundImageAndTextProps) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#62748e] text-[12px] text-nowrap top-px">{text}</p>
    </div>
  );
}
type RBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function RBackgroundImageAndText1({ text, additionalClassNames = "" }: RBackgroundImageAndText1Props) {
  return (
    <BackgroundImage3 additionalClassNames={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">{text}</p>
    </BackgroundImage3>
  );
}
type WrBackgroundImageAndTextProps = {
  text: string;
};

function WrBackgroundImageAndText({ text }: WrBackgroundImageAndTextProps) {
  return (
    <div className="[grid-area:2_/_1] place-self-stretch relative shrink-0">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#717182] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type RBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function RBackgroundImageAndText({ text, additionalClassNames = "" }: RBackgroundImageAndTextProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonBackgroundImageAndText({ text, additionalClassNames = "" }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex h-[32px] items-center justify-center px-[13px] py-[9px] rounded-[8px] top-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center text-nowrap">{text}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[64px] relative shrink-0 w-[355px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <div className="h-[62.71px] relative shrink-0 w-[48px]" data-name="Captura de Tela 2025-12-26 às 02.24.41 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[101.06%] left-[-0.19%] max-w-none top-[-0.6%] w-[100.19%]" src={imgCapturaDeTela20251226As0224411} />
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[53px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[-0.1504px] w-[99px]">
          <p className="leading-[38px]">DASHBOARD</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <BackgroundImage additionalClassNames="left-[12px]">
      <g clipPath="url(#clip0_1_460)" id="Icon">
        <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2710 0.3341 0.4242)", strokeOpacity: "1" }} />
        <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.2710 0.3341 0.4242)", strokeOpacity: "1" }} />
      </g>
      <defs>
        <clipPath id="clip0_1_460">
          <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
        </clipPath>
      </defs>
    </BackgroundImage>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white border border-[#e2e8f0] border-solid h-[38px] left-0 rounded-[10px] top-0 w-[145.383px]" data-name="Container">
      <Icon />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[36px] not-italic text-[#45556c] text-[14px] top-[8.5px] tracking-[-0.1504px] w-[96px]">Próxima: 12:00</p>
    </div>
  );
}

function Icon1() {
  return (
    <IconBackgroundImage additionalClassNames="left-[12px] top-[9px]">
      <path d={svgPaths.p14890d00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0392 0.0392 0.0392)", strokeOpacity: "1" }} />
      <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0392 0.0392 0.0392)", strokeOpacity: "1" }} />
    </IconBackgroundImage>
  );
}

function Button() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[36px] left-[153.38px] rounded-[8px] top-px w-[190.125px]" data-name="Button">
      <Icon1 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[106px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[7.5px] tracking-[-0.1504px] translate-x-[-50%]">Ferramentas de Sync</p>
    </div>
  );
}

function Icon2() {
  return (
    <IconBackgroundImage additionalClassNames="left-[12px] top-[10px]">
      <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
      <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
      <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
      <path d="M5.33333 10.6667H2V14" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
    </IconBackgroundImage>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#030213] h-[36px] left-[351.51px] rounded-[8px] top-px w-[106.086px]" data-name="Button">
      <Icon2 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[65px] not-italic text-[14px] text-center text-nowrap text-white top-[8.5px] tracking-[-0.1504px] translate-x-[-50%]">Atualizar</p>
    </div>
  );
}

function Container2() {
  return (
    <BackgroundImage2 additionalClassNames="h-[38px] w-[457.594px]">
      <Container1 />
      <Button />
      <Button1 />
    </BackgroundImage2>
  );
}

function Container3() {
  return (
    <ContainerBackgroundImage additionalClassNames="h-[64px] w-[1037px]">
      <Container />
      <Container2 />
    </ContainerBackgroundImage>
  );
}

function Text() {
  return (
    <BackgroundImage2 additionalClassNames="h-[20px] w-[159.633px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#314158] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Período de visualização:</p>
    </BackgroundImage2>
  );
}

function Icon3() {
  return (
    <BackgroundImage additionalClassNames="left-[91px]">
      <g id="Icon" opacity="0.5">
        <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0392 0.0392 0.0392)", strokeOpacity: "1" }} />
      </g>
    </BackgroundImage>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[120px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[30.5px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[8.5px] tracking-[-0.1504px] translate-x-[-50%]">2025</p>
        <Icon3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <ContainerBackgroundImage additionalClassNames="h-[36px] w-[295px]">
      <Text />
      <Button2 />
    </ContainerBackgroundImage>
  );
}

function Q() {
  return <div className="absolute bg-[#cad5e2] left-[53.73px] rounded-[1.67772e+07px] size-[6px] top-[12px]" data-name="Q5" />;
}

function Button3() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[295.3px] rounded-[8px] top-0 w-[73.727px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[26px] not-italic text-[#0a0a0a] text-[12px] text-center text-nowrap top-[8px] translate-x-[-50%]">Maio</p>
      <Q />
    </div>
  );
}

function Q1() {
  return <div className="absolute bg-[#cad5e2] left-[61.51px] rounded-[1.67772e+07px] size-[6px] top-[12px]" data-name="Q5" />;
}

function Button4() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[377.03px] rounded-[8px] top-0 w-[81.508px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[30px] not-italic text-[#0a0a0a] text-[12px] text-center text-nowrap top-[8px] translate-x-[-50%]">Junho</p>
      <Q1 />
    </div>
  );
}

function Q2() {
  return <div className="absolute bg-[#cad5e2] left-[57.54px] rounded-[1.67772e+07px] size-[6px] top-[12px]" data-name="Q5" />;
}

function Button5() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[466.54px] rounded-[8px] top-0 w-[77.539px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[28px] not-italic text-[#0a0a0a] text-[12px] text-center text-nowrap top-[8px] translate-x-[-50%]">Julho</p>
      <Q2 />
    </div>
  );
}

function Q3() {
  return <div className="absolute bg-[#cad5e2] left-[66.73px] rounded-[1.67772e+07px] size-[6px] top-[12px]" data-name="Q5" />;
}

function Button6() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[552.08px] rounded-[8px] top-0 w-[86.734px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[32.5px] not-italic text-[#0a0a0a] text-[12px] text-center text-nowrap top-[8px] translate-x-[-50%]">Agosto</p>
      <Q3 />
    </div>
  );
}

function Q4() {
  return <div className="absolute bg-[#cad5e2] left-[82.27px] rounded-[1.67772e+07px] size-[6px] top-[12px]" data-name="Q5" />;
}

function Button7() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[646.81px] rounded-[8px] top-0 w-[102.266px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[40px] not-italic text-[#0a0a0a] text-[12px] text-center text-nowrap top-[8px] translate-x-[-50%]">Setembro</p>
      <Q4 />
    </div>
  );
}

function Q5() {
  return <div className="absolute bg-[#cad5e2] left-[73.58px] rounded-[1.67772e+07px] size-[6px] top-[12px]" data-name="Q5" />;
}

function Button8() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[757.08px] rounded-[8px] top-0 w-[93.578px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[36px] not-italic text-[#0a0a0a] text-[12px] text-center text-nowrap top-[8px] translate-x-[-50%]">Outubro</p>
      <Q5 />
    </div>
  );
}

function Q6() {
  return <div className="absolute bg-white left-[85.41px] rounded-[1.67772e+07px] size-[6px] top-[13px]" data-name="Q5" />;
}

function Button9() {
  return (
    <div className="absolute bg-[#030213] h-[32px] left-[858.66px] rounded-[8px] top-0 w-[103.406px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[42px] not-italic text-[12px] text-center text-nowrap text-white top-[9px] translate-x-[-50%]">Novembro</p>
      <Q6 />
    </div>
  );
}

function Q7() {
  return <div className="absolute bg-[#cad5e2] left-[85.2px] rounded-[1.67772e+07px] size-[6px] top-[12px]" data-name="Q5" />;
}

function Button10() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-0 rounded-[8px] top-[40px] w-[105.195px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[42.5px] not-italic text-[#0a0a0a] text-[12px] text-center text-nowrap top-[8px] translate-x-[-50%]">Dezembro</p>
      <Q7 />
    </div>
  );
}

function Container5() {
  return (
    <BackgroundImage2 additionalClassNames="h-[89px] w-[426px]">
      <ButtonBackgroundImageAndText text="Janeiro" additionalClassNames="left-0 w-[68.555px]" />
      <ButtonBackgroundImageAndText text="Fevereiro" additionalClassNames="left-[76.55px] w-[79.75px]" />
      <ButtonBackgroundImageAndText text="Março" additionalClassNames="left-[164.3px] w-[62.047px]" />
      <ButtonBackgroundImageAndText text="Abril" additionalClassNames="left-[234.35px] w-[52.953px]" />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </BackgroundImage2>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-[1037px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pl-[17px] pr-px py-[17px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[238px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container6 />
    </div>
  );
}

function Bt() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[minmax(0px,_16fr)_minmax(0px,_1fr)] h-[40px] left-px pb-0 pt-[24px] px-[24px] top-px w-[1035px]" data-name="bt">
      <RBackgroundImageAndText text="Edição Selecionada" additionalClassNames="h-[16px]" />
      <WrBackgroundImageAndText text="14 de dezembro de 2025 às 11:02" />
    </div>
  );
}

function Q8() {
  return (
    <div className="absolute h-[20px] left-[12px] overflow-clip top-[7px] w-[396.984px]" data-name="Q5">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[198px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">Fim de caso, a onda dos adesivos e… socorro! Eu estou rico!</p>
    </div>
  );
}

function Icon4() {
  return (
    <IconBackgroundImage additionalClassNames="left-[957px] top-[9px]">
      <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0392 0.0392 0.0392)", strokeOpacity: "1" }} />
    </IconBackgroundImage>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[36px] left-[25px] rounded-[8px] top-[78px] w-[987px]" data-name="Button">
      <Q8 />
      <Icon4 />
    </div>
  );
}

function Lt() {
  return (
    <div className="bg-white h-[156px] relative rounded-[20px] shrink-0 w-full" data-name="lt">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]" />
      <Bt />
      <Button11 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <VectorBackgroundImage3>
        <path d={svgPaths.p352c6500} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0824 0.3647 0.9882)", strokeOpacity: "1" }} />
      </VectorBackgroundImage3>
      <VectorBackgroundImage4>
        <path d={svgPaths.p31080000} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0824 0.3647 0.9882)", strokeOpacity: "1" }} />
      </VectorBackgroundImage4>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.3335 5.24683">
            <path d={svgPaths.p234883c0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0824 0.3647 0.9882)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33872 6.50032">
            <path d={svgPaths.p1c9de7e0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0824 0.3647 0.9882)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Ee() {
  return (
    <EeBackgroundImage additionalClassNames="bg-[#dbeafe]">
      <Icon5 />
    </EeBackgroundImage>
  );
}

function Bt1() {
  return (
    <BtBackgroundImage>
      <RBackgroundImageAndText1 text="Total Enviados" additionalClassNames="w-[95.359px]" />
      <Ee />
    </BtBackgroundImage>
  );
}

function Ee1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="EE">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#155dfc] text-[24px] text-nowrap top-0 tracking-[0.0703px]">0</p>
    </div>
  );
}

function Ft() {
  return (
    <FtBackgroundImage>
      <Ee1 />
      <EeBackgroundImageAndText text="Inscritos que receberam" />
    </FtBackgroundImage>
  );
}

function Lt1() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex flex-col gap-[24px] items-start p-px place-self-stretch relative rounded-[20px] shrink-0" data-name="lt">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]" />
      <Bt1 />
      <Ft />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12">
            <path d={svgPaths.p3cc1ea80} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.6510 0.2431)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6668 5.33076">
            <path d={svgPaths.p13316000} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.6510 0.2431)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Ee2() {
  return (
    <EeBackgroundImage additionalClassNames="bg-[#dcfce7]">
      <Icon6 />
    </EeBackgroundImage>
  );
}

function Bt2() {
  return (
    <BtBackgroundImage>
      <RBackgroundImageAndText1 text="Aberturas" additionalClassNames="w-[65.656px]" />
      <Ee2 />
    </BtBackgroundImage>
  );
}

function Ee3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="EE">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#00a63e] text-[24px] text-nowrap top-0 tracking-[0.0703px]">0</p>
    </div>
  );
}

function Ft1() {
  return (
    <FtBackgroundImage>
      <Ee3 />
      <EeBackgroundImageAndText text="Taxa: 0.00%" />
    </FtBackgroundImage>
  );
}

function Lt2() {
  return (
    <div className="[grid-area:1_/_2] bg-white content-stretch flex flex-col gap-[24px] items-start p-px place-self-stretch relative rounded-[20px] shrink-0" data-name="lt">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]" />
      <Bt2 />
      <Ft1 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-1/2 right-[41.67%] top-[17.08%]" data-name="Vector">
        <div className="absolute inset-[-52.63%_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 2.6">
            <path d="M2 0.666668L0.666668 1.93333" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30%_78.75%_66.67%_9.17%]" data-name="Vector">
        <div className="absolute inset-[-125.03%_-34.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.267 1.867">
            <path d={svgPaths.pc60fa80} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-[17.08%] right-3/4 top-1/2" data-name="Vector">
        <div className="absolute inset-[-50%_-52.63%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.6 2.66667">
            <path d="M1.93333 0.666668L0.666668 2" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[9.17%_66.67%_78.75%_30%]" data-name="Vector">
        <div className="absolute inset-[-34.49%_-125.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.867 3.267">
            <path d={svgPaths.p2251a900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.49%_12.5%_12.49%_37.49%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33521 9.33625">
            <path d={svgPaths.p2a69d900} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Ee4() {
  return (
    <EeBackgroundImage additionalClassNames="bg-[#f3e8ff]">
      <Icon7 />
    </EeBackgroundImage>
  );
}

function Bt3() {
  return (
    <BtBackgroundImage>
      <RBackgroundImageAndText1 text="Cliques" additionalClassNames="w-[49.219px]" />
      <Ee4 />
    </BtBackgroundImage>
  );
}

function Ee5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="EE">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#9810fa] text-[24px] text-nowrap top-0 tracking-[0.0703px]">0</p>
    </div>
  );
}

function Ft2() {
  return (
    <FtBackgroundImage>
      <Ee5 />
      <EeBackgroundImageAndText text="Taxa: 0.00%" />
    </FtBackgroundImage>
  );
}

function Lt3() {
  return (
    <div className="[grid-area:1_/_3] bg-white content-stretch flex flex-col gap-[24px] items-start p-px place-self-stretch relative rounded-[20px] shrink-0" data-name="lt">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]" />
      <Bt3 />
      <Ft2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
            <path d={svgPaths.p7206a80} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9608 0.2863 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p341ae80} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9608 0.2863 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p2b1c1400} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9608 0.2863 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Ee6() {
  return (
    <EeBackgroundImage additionalClassNames="bg-[#ffedd4]">
      <Icon8 />
    </EeBackgroundImage>
  );
}

function Bt4() {
  return (
    <BtBackgroundImage>
      <RBackgroundImageAndText1 text="Taxa de Cliques" additionalClassNames="w-[103.555px]" />
      <Ee6 />
    </BtBackgroundImage>
  );
}

function Ee7() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="EE">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#f54900] text-[24px] text-nowrap top-0 tracking-[0.0703px]">0.00%</p>
    </div>
  );
}

function Ft3() {
  return (
    <FtBackgroundImage>
      <Ee7 />
      <EeBackgroundImageAndText text="Cliques por abertura" />
    </FtBackgroundImage>
  );
}

function Lt4() {
  return (
    <div className="[grid-area:2_/_1] bg-white content-stretch flex flex-col gap-[24px] items-start p-px place-self-stretch relative rounded-[20px] shrink-0" data-name="lt">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]" />
      <Bt4 />
      <Ft3 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 8">
            <path d={svgPaths.p137d8f80} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.5725 0.7216)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p1efb2580} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0000 0.5725 0.7216)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Ee8() {
  return (
    <EeBackgroundImage additionalClassNames="bg-[#cefafe]">
      <Icon9 />
    </EeBackgroundImage>
  );
}

function Bt5() {
  return (
    <BtBackgroundImage>
      <RBackgroundImageAndText1 text="Taxa de Abertura" additionalClassNames="w-[112.617px]" />
      <Ee8 />
    </BtBackgroundImage>
  );
}

function Ee9() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="EE">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#0092b8] text-[24px] text-nowrap top-0 tracking-[0.0703px]">0.00%</p>
    </div>
  );
}

function Ft4() {
  return (
    <FtBackgroundImage>
      <Ee9 />
      <EeBackgroundImageAndText text="Aberturas por envio" />
    </FtBackgroundImage>
  );
}

function Lt5() {
  return (
    <div className="[grid-area:2_/_2] bg-white content-stretch flex flex-col gap-[24px] items-start p-px place-self-stretch relative rounded-[20px] shrink-0" data-name="lt">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]" />
      <Bt5 />
      <Ft4 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <VectorBackgroundImage3>
        <path d={svgPaths.p352c6500} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9059 0.0000 0.0431)", strokeOpacity: "1" }} />
      </VectorBackgroundImage3>
      <VectorBackgroundImage4>
        <path d={svgPaths.p31080000} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9059 0.0000 0.0431)", strokeOpacity: "1" }} />
      </VectorBackgroundImage4>
      <div className="absolute inset-[45.83%_8.33%_54.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.67px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 1.33333">
            <path d="M4.66667 0.666667H0.666667" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9059 0.0000 0.0431)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Ee10() {
  return (
    <EeBackgroundImage additionalClassNames="bg-[#ffe2e2]">
      <Icon10 />
    </EeBackgroundImage>
  );
}

function Bt6() {
  return (
    <BtBackgroundImage>
      <RBackgroundImageAndText1 text="Unsubscribes" additionalClassNames="w-[90.828px]" />
      <Ee10 />
    </BtBackgroundImage>
  );
}

function Ee11() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="EE">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#e7000b] text-[24px] text-nowrap top-0 tracking-[0.0703px]">0</p>
    </div>
  );
}

function Ft5() {
  return (
    <FtBackgroundImage>
      <Ee11 />
      <EeBackgroundImageAndText text="Cancelamentos" />
    </FtBackgroundImage>
  );
}

function Lt6() {
  return (
    <div className="[grid-area:2_/_3] bg-white content-stretch flex flex-col gap-[24px] items-start p-px place-self-stretch relative rounded-[20px] shrink-0" data-name="lt">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]" />
      <Bt6 />
      <Ft5 />
    </div>
  );
}

function Ee12() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[348px] relative shrink-0 w-full" data-name="EE">
      <Lt1 />
      <Lt2 />
      <Lt3 />
      <Lt4 />
      <Lt5 />
      <Lt6 />
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-[#ececf0] relative rounded-[14px] shrink-0" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[3px] py-[4px] relative">
        <PrimitiveButtonBackgroundImageAndText text="Gráficos" additionalClassNames="bg-white w-[338.328px]" />
        <PrimitiveButtonBackgroundImageAndText text="Links Clicados" additionalClassNames="w-[338.336px]" />
        <PrimitiveButtonBackgroundImageAndText text="Unsubscribes" additionalClassNames="w-[338.336px]" />
      </div>
    </div>
  );
}

function Bt7() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[minmax(0px,_16fr)_minmax(0px,_1fr)] h-[70px] left-px pb-0 pt-[24px] px-[24px] top-px w-[1035px]" data-name="bt">
      <RBackgroundImageAndText text="Evolução de Métricas" additionalClassNames="place-self-stretch" />
      <WrBackgroundImageAndText text="Inscritos, aberturas e cliques ao longo do tempo" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.43%_0.51%_16%_6.59%]" data-name="Group">
      <div className="absolute inset-[-0.17%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 917 290">
          <g id="Group">
            <path d="M0 289.5H917" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M0 217.25H917" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M0 145H917" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M0 72.75H917" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M0 0.5H917" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.43%_0.51%_16%_6.59%]" data-name="Group">
      <div className="absolute inset-[0_-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 918 289">
          <g id="Group">
            <path d="M0.5 0V289" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M459 0V289" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M917.5 0V289" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[1.43%_0.51%_16%_6.59%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[84%_90.37%_10.42%_3.55%]" data-name="Group">
      <VectorBackgroundImage additionalClassNames="inset-[84%_93.41%_14.29%_6.59%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[85.29%_90.37%_10.42%_3.55%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center text-nowrap">30 de nov.</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[10.42%] contents left-1/2 right-[43.92%] top-[84%]" data-name="Group">
      <VectorBackgroundImage additionalClassNames="inset-[84%_46.96%_14.29%_53.04%]" />
      <p className="absolute bottom-[10.42%] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic right-[43.92%] text-[#64748b] text-[12px] text-center text-nowrap top-[85.29%]">07 de dez.</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[84%_-0.02%_10.42%_94.05%]" data-name="Group">
      <VectorBackgroundImage additionalClassNames="inset-[84%_0.51%_14.29%_99.49%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[85.29%_-0.02%_10.42%_94.05%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center text-nowrap">14 de dez.</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[84%_-0.02%_10.42%_3.55%]" data-name="Group">
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[84%_-0.02%_10.42%_3.55%]" data-name="Group">
      <VectorBackgroundImage1 additionalClassNames="inset-[84%_0.51%_16%_6.59%]" />
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[81.79%_93.41%_13.93%_4.96%]" data-name="Group">
      <VectorBackgroundImage2 additionalClassNames="inset-[84%_93.41%_16%_5.98%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[81.79%_94.22%_13.93%_4.96%] leading-[normal] not-italic text-[#64748b] text-[12px] text-nowrap text-right">0</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[61.15%_93.41%_34.57%_5.17%]" data-name="Group">
      <VectorBackgroundImage2 additionalClassNames="inset-[63.36%_93.41%_36.64%_5.98%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.15%_94.22%_34.57%_5.17%] leading-[normal] not-italic text-[#64748b] text-[12px] text-nowrap text-right">1</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[40.5%_93.41%_55.21%_4.96%]" data-name="Group">
      <VectorBackgroundImage2 additionalClassNames="inset-[42.71%_93.41%_57.29%_5.98%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[40.5%_94.22%_55.21%_4.96%] leading-[normal] not-italic text-[#64748b] text-[12px] text-nowrap text-right">2</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[19.86%_93.41%_75.85%_4.96%]" data-name="Group">
      <VectorBackgroundImage2 additionalClassNames="inset-[22.07%_93.41%_77.93%_5.98%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[19.86%_94.22%_75.85%_4.96%] leading-[normal] not-italic text-[#64748b] text-[12px] text-nowrap text-right">3</p>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[0.36%_93.41%_95.35%_4.96%]" data-name="Group">
      <VectorBackgroundImage2 additionalClassNames="inset-[1.43%_93.41%_98.57%_5.98%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.36%_94.22%_95.35%_4.96%] leading-[normal] not-italic text-[#64748b] text-[12px] text-nowrap text-right">4</p>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[0.36%_93.41%_13.93%_4.96%]" data-name="Group">
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[0.36%_93.41%_13.93%_4.96%]" data-name="Group">
      <div className="absolute inset-[1.43%_93.41%_16%_6.59%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 289">
            <path d="M0.5 0V289" id="Vector" stroke="var(--stroke-0, #64748B)" style={{ stroke: "color(display-p3 0.3922 0.4549 0.5451)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <GroupBackgroundImage>
      <path d={svgPaths.p19126300} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeDasharray="907.52 9.48" strokeWidth="2" style={{ stroke: "color(display-p3 0.2314 0.5098 0.9647)", strokeOpacity: "1" }} />
    </GroupBackgroundImage>
  );
}

function Group16() {
  return (
    <GroupBackgroundImage>
      <path d={svgPaths.p19126300} id="Vector" stroke="var(--stroke-0, #10B981)" strokeDasharray="907.52 9.48" strokeWidth="2" style={{ stroke: "color(display-p3 0.0627 0.7255 0.5059)", strokeOpacity: "1" }} />
    </GroupBackgroundImage>
  );
}

function Group17() {
  return (
    <GroupBackgroundImage>
      <path d={svgPaths.p19126300} id="Vector" stroke="var(--stroke-0, #A855F7)" strokeDasharray="907.52 9.48" strokeWidth="2" style={{ stroke: "color(display-p3 0.6588 0.3333 0.9686)", strokeOpacity: "1" }} />
    </GroupBackgroundImage>
  );
}

function Sd() {
  return (
    <div className="absolute h-[350px] left-0 overflow-clip top-0 w-[987px]" data-name="Sd">
      <Group2 />
      <Group7 />
      <Group14 />
      <Group15 />
      <Group16 />
      <Group17 />
    </div>
  );
}

function Sd1() {
  return (
    <SdBackgroundImage>
      <path d={svgPaths.p10f52180} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeWidth="1.75" style={{ stroke: "color(display-p3 0.2314 0.5098 0.9647)", strokeOpacity: "1" }} />
    </SdBackgroundImage>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[18px] top-[2px] w-[55.102px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#3b82f6] text-[14px] text-center text-nowrap tracking-[-0.1504px]">Inscritos</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[21px] left-[363.05px] top-0 w-[73.102px]" data-name="List Item">
      <Sd1 />
      <Text1 />
    </div>
  );
}

function Sd2() {
  return (
    <SdBackgroundImage>
      <path d={svgPaths.p10f52180} id="Vector" stroke="var(--stroke-0, #10B981)" strokeWidth="1.75" style={{ stroke: "color(display-p3 0.0627 0.7255 0.5059)", strokeOpacity: "1" }} />
    </SdBackgroundImage>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[18px] top-[2px] w-[63.789px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#10b981] text-[14px] text-center text-nowrap tracking-[-0.1504px]">Aberturas</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[21px] left-[446.16px] top-0 w-[81.789px]" data-name="List Item">
      <Sd2 />
      <Text2 />
    </div>
  );
}

function Sd3() {
  return (
    <SdBackgroundImage>
      <path d={svgPaths.p10f52180} id="Vector" stroke="var(--stroke-0, #A855F7)" strokeWidth="1.75" style={{ stroke: "color(display-p3 0.6588 0.3333 0.9686)", strokeOpacity: "1" }} />
    </SdBackgroundImage>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[18px] top-[2px] w-[48px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#a855f7] text-[14px] text-center text-nowrap tracking-[-0.1504px]">Cliques</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[21px] left-[537.95px] top-0 w-[66px]" data-name="List Item">
      <Sd3 />
      <Text3 />
    </div>
  );
}

function Legend() {
  return (
    <div className="absolute h-[21px] left-[5px] top-[324px] w-[977px]" data-name="Legend">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function LineChart() {
  return (
    <div className="absolute h-[350px] left-[25px] top-[95px] w-[987px]" data-name="LineChart">
      <Sd />
      <Legend />
    </div>
  );
}

function Lt7() {
  return (
    <div className="bg-white h-[470px] relative rounded-[14px] shrink-0 w-full" data-name="lt">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Bt7 />
      <LineChart />
    </div>
  );
}

function Bt8() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[minmax(0px,_16fr)_minmax(0px,_1fr)] h-[70px] left-px pb-0 pt-[24px] px-[24px] top-px w-[1035px]" data-name="bt">
      <RBackgroundImageAndText text="Taxas de Conversão" additionalClassNames="place-self-stretch" />
      <WrBackgroundImageAndText text="Taxa de abertura e taxa de clique por publicação" />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[1.67%_0.51%_18.67%_6.59%]" data-name="Group">
      <div className="absolute inset-[-0.21%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 917 240">
          <g id="Group">
            <path d="M0 0.5H917" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M0 239.5H917" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[1.67%_0.51%_18.67%_6.59%]" data-name="Group">
      <div className="absolute inset-[0_-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 918 239">
          <g id="Group">
            <path d="M153.333 0V239" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M459 0V239" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M764.667 0V239" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M0.5 0V239" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M917.5 0V239" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[1.67%_0.51%_18.67%_6.59%]" data-name="Group">
      <Group18 />
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[81.33%_74.89%_12.16%_19.03%]" data-name="Group">
      <VectorBackgroundImage additionalClassNames="inset-[81.33%_77.93%_16.67%_22.07%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.84%_74.89%_12.16%_19.03%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center text-nowrap">30 de nov.</p>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute bottom-[12.16%] contents left-1/2 right-[43.92%] top-[81.33%]" data-name="Group">
      <VectorBackgroundImage additionalClassNames="inset-[81.33%_46.96%_16.67%_53.04%]" />
      <p className="absolute bottom-[12.16%] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic right-[43.92%] text-[#64748b] text-[12px] text-center text-nowrap top-[82.84%]">07 de dez.</p>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[81.33%_13%_12.16%_81.02%]" data-name="Group">
      <VectorBackgroundImage additionalClassNames="inset-[81.33%_15.99%_16.67%_84.01%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.84%_13%_12.16%_81.02%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center text-nowrap">14 de dez.</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[81.33%_13%_12.16%_19.03%]" data-name="Group">
      <Group21 />
      <Group22 />
      <Group23 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[81.33%_0.51%_12.16%_6.59%]" data-name="Group">
      <VectorBackgroundImage1 additionalClassNames="inset-[81.33%_0.51%_18.67%_6.59%]" />
      <Group24 />
    </div>
  );
}

function Sd4() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[987px]" data-name="Sd">
      <Group20 />
      <Group25 />
    </div>
  );
}

function Sd5() {
  return (
    <SdBackgroundImage>
      <path d="M0 1.75H14V12.25H0V1.75Z" fill="var(--fill-0, #06B6D4)" id="Vector" style={{ fill: "color(display-p3 0.0235 0.7137 0.8314)", fillOpacity: "1" }} />
    </SdBackgroundImage>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[18px] top-[2px] w-[137.094px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#06b6d4] text-[14px] text-center text-nowrap tracking-[-0.1504px]">Taxa de Abertura (%)</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute h-[21px] left-[331.3px] top-0 w-[155.094px]" data-name="List Item">
      <Sd5 />
      <Text4 />
    </div>
  );
}

function Sd6() {
  return (
    <SdBackgroundImage>
      <path d="M0 1.75H14V12.25H0V1.75Z" fill="var(--fill-0, #F97316)" id="Vector" style={{ fill: "color(display-p3 0.9765 0.4510 0.0863)", fillOpacity: "1" }} />
    </SdBackgroundImage>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[18px] top-[2px] w-[121.297px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#f97316] text-[14px] text-center text-nowrap tracking-[-0.1504px]">Taxa de Clique (%)</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute h-[21px] left-[496.4px] top-0 w-[139.297px]" data-name="List Item">
      <Sd6 />
      <Text5 />
    </div>
  );
}

function Legend1() {
  return (
    <div className="absolute h-[21px] left-[5px] top-[274px] w-[977px]" data-name="Legend">
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="absolute h-[300px] left-[25px] top-[95px] w-[987px]" data-name="BarChart">
      <Sd4 />
      <Legend1 />
    </div>
  );
}

function Lt8() {
  return (
    <div className="bg-white h-[420px] relative rounded-[14px] shrink-0 w-full" data-name="lt">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Bt8 />
      <BarChart />
    </div>
  );
}

function Bt9() {
  return (
    <div className="absolute gap-[6px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[minmax(0px,_16fr)_minmax(0px,_1fr)] h-[70px] left-px pb-0 pt-[24px] px-[24px] top-px w-[1035px]" data-name="bt">
      <RBackgroundImageAndText text="Cancelamentos por Publicação" additionalClassNames="place-self-stretch" />
      <WrBackgroundImageAndText text="Quantidade de unsubscribes após cada envio" />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute inset-[2%_0.51%_22.4%_6.59%]" data-name="Group">
      <div className="absolute inset-[-0.26%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 917 190">
          <g id="Group">
            <path d="M0 189.5H917" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M0 142.25H917" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M0 95H917" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M0 47.75H917" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M0 0.5H917" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute inset-[2%_0.51%_22.4%_6.59%]" data-name="Group">
      <div className="absolute inset-[0_-0.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 918 189">
          <g id="Group">
            <path d="M153.333 0V189" id="Vector" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M459 0V189" id="Vector_2" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M764.667 0V189" id="Vector_3" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M0.5 0V189" id="Vector_4" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
            <path d="M917.5 0V189" id="Vector_5" stroke="var(--stroke-0, #E2E8F0)" strokeDasharray="3 3" style={{ stroke: "color(display-p3 0.8863 0.9098 0.9412)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[2%_0.51%_22.4%_6.59%]" data-name="Group">
      <Group26 />
      <Group27 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[77.6%_74.89%_14.59%_19.03%]" data-name="Group">
      <VectorBackgroundImage additionalClassNames="inset-[77.6%_77.93%_20%_22.07%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[79.41%_74.89%_14.59%_19.03%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center text-nowrap">30 de nov.</p>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute bottom-[14.59%] contents left-1/2 right-[43.92%] top-[77.6%]" data-name="Group">
      <VectorBackgroundImage additionalClassNames="inset-[77.6%_46.96%_20%_53.04%]" />
      <p className="absolute bottom-[14.59%] font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-1/2 not-italic right-[43.92%] text-[#64748b] text-[12px] text-center text-nowrap top-[79.41%]">07 de dez.</p>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[77.6%_13%_14.59%_81.02%]" data-name="Group">
      <VectorBackgroundImage additionalClassNames="inset-[77.6%_15.99%_20%_84.01%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[79.41%_13%_14.59%_81.02%] leading-[normal] not-italic text-[#64748b] text-[12px] text-center text-nowrap">14 de dez.</p>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[77.6%_13%_14.59%_19.03%]" data-name="Group">
      <Group29 />
      <Group30 />
      <Group31 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[77.6%_0.51%_14.59%_6.59%]" data-name="Group">
      <VectorBackgroundImage1 additionalClassNames="inset-[77.6%_0.51%_22.4%_6.59%]" />
      <Group32 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[74.5%_93.41%_19.5%_4.96%]" data-name="Group">
      <VectorBackgroundImage2 additionalClassNames="inset-[77.6%_93.41%_22.4%_5.98%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[74.5%_94.22%_19.5%_4.96%] leading-[normal] not-italic text-[#64748b] text-[12px] text-nowrap text-right">0</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[55.6%_93.41%_38.4%_5.17%]" data-name="Group">
      <VectorBackgroundImage2 additionalClassNames="inset-[58.7%_93.41%_41.3%_5.98%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[55.6%_94.22%_38.4%_5.17%] leading-[normal] not-italic text-[#64748b] text-[12px] text-nowrap text-right">1</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[36.7%_93.41%_57.3%_4.96%]" data-name="Group">
      <VectorBackgroundImage2 additionalClassNames="inset-[39.8%_93.41%_60.2%_5.98%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.7%_94.22%_57.3%_4.96%] leading-[normal] not-italic text-[#64748b] text-[12px] text-nowrap text-right">2</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[17.8%_93.41%_76.2%_4.96%]" data-name="Group">
      <VectorBackgroundImage2 additionalClassNames="inset-[20.9%_93.41%_79.1%_5.98%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[17.8%_94.22%_76.2%_4.96%] leading-[normal] not-italic text-[#64748b] text-[12px] text-nowrap text-right">3</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[0.5%_93.41%_93.5%_4.96%]" data-name="Group">
      <VectorBackgroundImage2 additionalClassNames="inset-[2%_93.41%_98%_5.98%]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.5%_94.22%_93.5%_4.96%] leading-[normal] not-italic text-[#64748b] text-[12px] text-nowrap text-right">4</p>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[0.5%_93.41%_19.5%_4.96%]" data-name="Group">
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[0.5%_93.41%_19.5%_4.96%]" data-name="Group">
      <div className="absolute inset-[2%_93.41%_22.4%_6.59%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 189">
            <path d="M0.5 0V189" id="Vector" stroke="var(--stroke-0, #64748B)" style={{ stroke: "color(display-p3 0.3922 0.4549 0.5451)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <Group39 />
    </div>
  );
}

function Sd7() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[987px]" data-name="Sd">
      <Group28 />
      <Group33 />
      <Group40 />
    </div>
  );
}

function Sd8() {
  return (
    <SdBackgroundImage>
      <path d="M0 1.75H14V12.25H0V1.75Z" fill="var(--fill-0, #EF4444)" id="Vector" style={{ fill: "color(display-p3 0.9373 0.2667 0.2667)", fillOpacity: "1" }} />
    </SdBackgroundImage>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-[18px] top-[2px] w-[88.664px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#ef4444] text-[14px] text-center text-nowrap tracking-[-0.1504px]">Unsubscribes</p>
    </div>
  );
}

function Legend2() {
  return (
    <div className="absolute h-[21px] left-[435.16px] top-[224px] w-[106.664px]" data-name="Legend">
      <Sd8 />
      <Text6 />
    </div>
  );
}

function BarChart1() {
  return (
    <div className="absolute h-[250px] left-[25px] top-[95px] w-[987px]" data-name="BarChart">
      <Sd7 />
      <Legend2 />
    </div>
  );
}

function Lt9() {
  return (
    <div className="bg-white h-[370px] relative rounded-[14px] shrink-0 w-full" data-name="lt">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Bt9 />
      <BarChart1 />
    </div>
  );
}

function WW() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1037px]" data-name="wW">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Lt7 />
        <Lt8 />
        <Lt9 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[1336px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabList />
      <WW />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[29px] h-[2150px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Lt />
      <Ee12 />
      <PrimitiveDiv />
    </div>
  );
}

export default function NewsletterMetricsDashboard() {
  return (
    <div className="relative size-full" data-name="Newsletter Metrics Dashboard" style={{ backgroundImage: "linear-gradient(116.441deg, rgb(248, 250, 252) 0%, rgb(241, 245, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[32px] px-[32px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}