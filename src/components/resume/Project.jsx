export default function Project({projects}) {
    const projectsUi = projects.map((proj, index) => {
        const {type, title, companyName, description, tech} = proj;
        return (
            <article key={`${title.slice(0, 20)}-${companyName.slice(0, 20)}-${index}`}>
                <h3>{(type || 'Project/Internship') + (title || 'title') + (companyName || 'Company/Institute Name')}</h3>
                <p className="project-description">{description || 'Brief description'}</p>
                <p className="project-tech">{tech || 'Tools/Technologies used'}</p>
            </article>
        );
    });
    if (projectsUi.length > 0) return projectsUi;

    return (
        <article>
            <h3>Project/Internship Title-[company/Institute Name]</h3>
            <p className="project-description">Brief description</p>
            <p className="project-tech">Tools/Technologies used</p>
        </article>
    );
}
