import InputSetup from "./Input-setup.jsx";

export default function AchievementInputs(achievements, setAchievements) {
    function handleChange(e, i) {
        setAchievements(achievements.map((el, mapIndex) => {
            if (mapIndex === i) return e.target.value;
            return el;
        }));
    }
    return (index) => {
        const achiev = achievements[index];
        if (achiev === undefined) throw new Error("Couldn't find achievement");
        return (
            <InputSetup
              value={achiev}
              id={achiev?.slice(0, 20) + index}
              label={`achievement ${index}`}
              placeholder="key responsability or achievement"
              onChange={e => handleChange(e, index)}
              />
        )
    };
}
