function SkillBadge({ skills, level }) {
  const badgeColor = {
    Beginner: "gray",
    Intermediate: "Blue",
    Expert: "green",
  };
  const colorClass = badgeColor[level];
  return (
    <div className="skills">
      <p>
        [{skills} -{" "}
        <span
          style={{
            backgroundColor: colorClass,
            padding: "10px",
            fontSize: "bold",
            borderRadius: '5px'
          }}
        >
          {level}
        </span>
        ]
      </p>
    </div>
  );
}
export default SkillBadge;
