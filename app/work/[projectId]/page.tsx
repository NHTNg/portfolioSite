type TypeProps = {
  params: { projectId: string };
};

export default function projectDetailPage(props: TypeProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      Project ID: {props.params.projectId}
    </div>
  );
}
