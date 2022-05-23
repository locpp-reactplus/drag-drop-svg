import classNames from "classnames";
import HoverSelection from "./HoverSelection";
import mapping from "./mapping";
import useSvg from "./useSvg";

function SvgLayout({
  loading,
  handleMouseEnter,
  handleMouseLeave,
  listComponent,
  hoverId
}) {
  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <svg
        style={{
          backgroundColor: "gray"
        }}
        width="100vw"
        height="100vh"
      >
        {listComponent.map((component) => {
          const SvgComponent = mapping[component.type];
          return (
            <SvgComponent
              {...component}
              key={component.id}
              onMouseEnter={handleMouseEnter(component.id)}
              onMouseLeave={handleMouseLeave}
              classname={classNames({
                hovered: component.id === hoverId
              })}
            />
          );
        })}

        {hoverId && <HoverSelection />}
      </svg>
    </div>
  );
}

export default (props) => <SvgLayout {...useSvg(props)} />;
