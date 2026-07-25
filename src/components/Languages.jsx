export default function Language({languages}) {
    const languagesUi = languages.map(lang => {
        return (
            <li>{lang}</li>
        );
    });

    if (languagesUi.length > 0) {
        return (
            <ul>
                {languagesUi}
            </ul>
        );
    }

    return (
        <ul>
            <li>[Language] [Level]</li>
        </ul>
    );
}
