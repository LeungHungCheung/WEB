
const data = {
    name: "Me",
    children: [
        {
            name: "School",
            children: [
                { 
                    name: "Undergraduate", 
                    imports: [
                        "Me.Artwork.Digital Art", "Me.Artwork.Animation", "Me.Artwork.VFX", "Me.Artwork.Physical Computing",
                        "Me.Skills.Design", "Me.Skills.UI/UX Design", "Me.Skills.Game Design", "Me.Skills.Programming",
                        "Me.Tools.Processing", "Me.Projects.Creative Coding", "Me.Projects.Social Engaged Practice"
                    ],
                    details: {
                        title: "Undergraduate",
                        description: "Currently studying at the School of Creative Media at City University of Hong Kong. This program combines art, technology, and critical thinking, allowing me to explore digital art, physical computing, game design, and more."
                    }
                },
                { 
                    name: "Associate Degree", 
                    imports: [
                        "Me.Tools.C++", "Me.Tools.C", "Me.Tools.Arduino", "Me.Skills.Electronic Connection", 
                        "Me.Skills.Complex Maths", "Me.Skills.Problem Solving", "Me.Artwork.Physical Computing"
                    ],
                    details: {
                        title: "Engineering (HKCC)",
                        description: "Completed an Associate Degree in Engineering at HKCC from 2021-2023. This program provided a strong foundation in C/C++, electronics, complex logical thinking, and mathematics, which now informs my technical art practice."
                    } 
                }
            ]
        },
        {
            name: "Artwork",
            children: [
                { name: "Painting", imports: ["Me.Hobbies.Drawing","Me.School.Undergraduate"],
                    details: {
                        title: "Painting",
                        description: "Completed one painting course in CityU back to the time in my first year. It was about pencil drawing, life drawing and sketching which equipped me with basic painting skills and knowledge",
                        relations:["Drawing","Undergraduate"]
                    }
                 },
                { name: "Sculpture", imports: ["Me.Hobbies.Crafting","Me.School.Undergraduate"],
                    details:{
                        title: "Sculpture",
                        description:"Completed one sculpture course in CityU in my first year. It was all material based, it teach me how to adopt different situation to create unique sculpture.",
                        image:"source/14.webp",
                        relations:["Crafting","Undergraduate"]
                    }
                },
                { name: "Digital Art", imports: ["Me.Tools.Photoshop", "Me.Tools.Illustration","Me.School.Undergraduate"],
                    details:{
                        title:"Digital Art",
                        description:"A synthesis of digital painting, photo manipulation, and graphic design. Focusing on composition, color theory, and the precise execution of visual ideas using Photoshop and Illustrator.",
                        relations: ["Photography", "Infographic", "Art Game","Undergraduate"]
                    }
                 },
                { name: "Photography", imports: ["Me.Skills.Camera Operation", "Me.Tools.LightRoom","Me.School.Undergraduate"],
                    details:{
                        title:"Photography",
                        description:"The art of capturing moments with technical precision. Focusing on visual storytelling through composition, exposure control, and advanced post-processing in Lightroom.",
                        relations:["Photo Series","Undergraduate"]
                    }
                },
                { name: "Art Photography", imports: ["Me.Skills.Camera Operation", "Me.Tools.Photoshop","Me.School.Undergraduate"] },
                { name: "B&W Photography", imports: ["Me.Tools.LightRoom","Me.School.Undergraduate"] },
                { name: "Infographic", imports: ["Me.Tools.InDesign", "Me.Skills.Data Analysis","Me.School.Undergraduate"],
                    details:{
                        title:"Infographic",
                        description:"Creation of data visualizations and illustrative materials that simplify complex subjects. This practice relies on strong data analysis skills paired with design precision in Indesign to produce highly structured and concise informational graphics.",
                        image: "source/12.webp",
                        link: "https://drive.google.com/file/d/19usUeSW3dAYvDcQidRO0e5kuyVlMPBcm/view?usp=sharing",
                        relations:["UI/UX Design","Undergraduate"]
                    }
                },
                { name: "Animation", imports: ["Me.Tools.After Effect", "Me.Tools.Premiere Pro"] },
                { name: "VFX", imports: ["Me.Tools.After Effect", "Me.Tools.Davinci Resolve"] },
                { 
                    name: "Game", 
                    imports: ["Me.Skills.Game Design", "Me.Tools.C#", "Me.Skills.Programming","Me.School.Undergraduate"],
                    details: {
                        title: "Art Game",
                        description: "Exploring the medium of games as a form of artistic expression. This involves using C# and Unity to create interactive experiences that prioritize concept, aesthetic, and critical thought over traditional gameplay mechanics.",
                        relations:["Art Game"]
                    }
                },
                { name: "Physical Computing", imports: ["Me.Tools.Arduino", "Me.Skills.Electronic Connection","Me.School.Undergraduate"],
                    details: {
                        title: "Physical Computing",
                        description: "Physical Computing explores how humans communicate with the digital world through physical interactions, utilizing sensors and effectors to translate environmental sensations into understandable forms. It focuses on building interactive systems that sense and respond to the physical world via embedded systems and open-source hardware platforms like Arduino. This practice increasingly integrates modern technologies, including GenAI tools for conceptualization and rapid prototyping techniques such as laser cutting and Wizard-of-Oz methods, to create tangible works that bridge the physical and digital realms.",
                        relations:["Arduino","Programming"]
                    }
                 }
            ]
        },
        {
                    name: "Skills",
                    children: [
                        { name: "Programming", imports: ["Me.Tools.VS Code", "Me.Tools.GitHub", "Me.Tools.Python", "Me.Tools.JavaScript","Me.School.Associate Degree","Me.School.Undergraduate"] ,
                            details: {
                        title: "Programming",
                        description: "Programming serves as my bridge between logic and creative expression, spanning both physical and digital realms. Proficient in C++ and Arduino for hardware interaction, I simultaneously utilize JavaScript and CSS to craft immersive websites, dynamic visualizations, and interactive games, effectively translating technical code into engaging user experiences.",
                        relations:["Arduino","Art Game","Creative Coding","Personal Website","Sustainable Arduino"]
                    }
                        },
                        { name: "Design", imports: ["Me.Tools.Figma", "Me.Tools.Photoshop", "Me.Tools.Illustration","Me.School.Undergraduate"] },
                        { name: "Communication", imports: ["Me.Experience.Volunteer Work", "Me.Languages.English", "Me.Languages.Cantonese"] },
                        { name: "Project Management", imports: ["Me.Experience.Video Company (MBP)", "Me.Projects.Social Engaged Practice","Me.School.Undergraduate"] },
                        { name: "Data Analysis", imports: ["Me.Tools.Python", "Me.Tools.DeepSeek","Me.School.Associate Degree","Me.School.Undergraduate"] },
                        { name: "Public Speaking", imports: ["Me.Experience.Student Helper", "Me.Experience.Volunteer Work","Me.School.Undergraduate"] },
                        { name: "Writing", imports: ["Me.Tools.InDesign", "Me.Experience.Freelance"] },
                        { name: "Camera Operation", imports: ["Me.Experience.Video Company (MBP)", "Me.Artwork.Photography"] },
                        { name: "Problem Solving", imports: ["Me.School.Associate Degree", "Me.Projects.Sustainable Arduino","Me.School.Undergraduate"] },
                        { name: "Teamwork", imports: ["Me.Experience.Video Company (MBP)", "Me.Experience.Music Company (JLMusic)","Me.School.Undergraduate"] },
                        { name: "UI/UX Design", imports: ["Me.Tools.Figma", "Me.Projects.Personal Website", "Me.Projects.Art Game","Me.School.Undergraduate"],
                            details:{
                                title:"UI/UX",
                                description:"UI/UX Design focuses on crafting intuitive and visually compelling digital experiences. I utilize Figma for wireframing and high-fidelity prototyping to map out user journeys, and leverage platforms like Wix Studio to translate these conceptual designs into functional, responsive web layouts that prioritize both aesthetics and usability.",
                                image:"source/18.webp",
                                link:"https://www.figma.com/design/zRyDrgtesu4YTydRflXs81/UX-UI-Assignment?node-id=2-3&t=8x316ig0dZzw5gMr-1",
                                relations:["Digital Art","Programming","Personal Website","Figma","Undergraduate"]
                            }
                         },
                        { name: "Leadership", imports: ["Me.Experience.Student Helper", "Me.Projects.Social Engaged Practice","Me.School.Undergraduate"] },
                        { name: "AI Use", imports: ["Me.Tools.DeepSeek", "Me.Tools.Python","Me.School.Undergraduate"] },
                        { name: "Electronic Connection", imports: ["Me.Tools.Arduino", "Me.Projects.Sustainable Arduino","Me.School.Associate Degree"] },
                        { name: "Game Design", imports: ["Me.Tools.C#", "Me.Artwork.Art Game","Me.School.Undergraduate"] },
                        { name: "Floor Plan Drawing", imports: ["Me.Tools.AutoCAD","Me.School.Associate Degree"] },
                        { name: "Complex Maths", imports: ["Me.School.Associate Degree", "Me.Tools.C++"] }
                    ]
                },
        {
                    name: "Experience",
                    children: [
                        { name: "Video Company (MBP)", imports: ["Me.Tools.Premiere Pro", "Me.Tools.After Effect", "Me.Tools.Davinci Resolve", "Me.Skills.Teamwork"],
                            details:{
                                title:"MBP (Internship)",
                                description:"My time at MBP solidified my passion for post-production and visual storytelling. I was deeply involved in the video production workflow, ranging from shooting live events to the final edit. Leveraging tools like Adobe Premiere Pro, After Effects, and CapCut, I crafted dynamic video narratives, refining my skills in pacing, visual effects, and technical editing to deliver high-quality content.",
                                image:"source/20.webp",
                                link:"https://www.instagram.com/mbpproduce/",
                                relations:["Photography","CapCut","Premiere Pro","After Effect"]
                            }
                         },
                        { name: "Music Company (JLMusic)", imports: ["Me.Hobbies.Guitar", "Me.Skills.Teamwork"],
                            details:{
                                title:"JLMusic",
                                description:"Since 2022, I have been a dedicated visual creative for JLMusic, overseeing the full spectrum of media production. My responsibilities span from planning and directing music videos to executing event photography and videography. I leverage my editing skills to craft compelling visual narratives that align with the label's musical identity, ensuring high-quality output from concept to final cut.",
                                image:"source/19.webp",
                                link:"https://www.instagram.com/jlmusichk/",
                                relations:["Photography","Davinci Resolve"]
                            }
                         },
                        { name: "Crew Work", imports: ["Me.Skills.Public Speaking", "Me.Skills.Communication"] },
                        { name: "Freelance", imports: ["Me.Skills.Design", "Me.Skills.Writing", "Me.Tools.Figma"] },
                        { name: "Student Helper", imports: ["Me.Skills.Leadership", "Me.School.Undergraduate"]}
                    ]
                },
        {
            name: "Tools",
            children: [
                        { name: "Python", imports: ["Me.Skills.Data Analysis", "Me.Skills.AI Use","Me.School.Associate Degree"] },
                        { name: "C++", imports: ["Me.School.Associate Degree", "Me.Skills.Programming","Me.School.Associate Degree"] },
                        { name: "C#",  imports: ["Me.Artwork.Art Game", "Me.Skills.Game Design","Me.School.Undergraduate"],},
                        { name: "JavaScript", imports: ["Me.Projects.Personal Website", "Me.Projects.Creative Coding","Me.Tools. Processing","Me.School.Undergraduate"] },
                        { name: "Figma", imports: ["Me.Skills.UI/UX Design", "Me.Projects.Personal Website","Me.School.Undergraduate"] },
                        { name: "VS Code", imports: ["Me.Skills.Programming", "Me.Projects.Creative Coding","Me.School.Undergraduate"] },
                        { name: "GitHub", imports: ["Me.Skills.Programming", "Me.Projects.Personal Website","Me.School.Undergraduate"] },
                        { name: "After Effect", imports: ["Me.Artwork.Animation", "Me.Artwork.VFX"] },
                        { name: "LightRoom", imports: ["Me.Artwork.Photography", "Me.Artwork.B&W Photography"] },
                        { name: "Photoshop", imports: ["Me.Artwork.Digital Art", "Me.Skills.Design"] },
                        { name: "InDesign", imports: ["Me.Artwork.Infographic", "Me.Skills.Writing"] },
                        { name: "Premiere Pro", imports: ["Me.Experience.Video Company (MBP)"] },
                        { name: "CapCut", imports: ["Me.Hobbies.Photography"] }, 
                        { name: "Davinci Resolve", imports: ["Me.Experience.Video Company (MBP)", "Me.Artwork.VFX"] },
                        { name: "Illustration", imports: ["Me.Artwork.Illustration", "Me.Skills.Design"] },
                        { name: "Arduino", imports: ["Me.Projects.Sustainable Arduino", "Me.Skills.Electronic Connection","Me.School.Undergraduate"] },
                        { name: "DeepSeek", imports: ["Me.Skills.AI Use", "Me.School.Online Course"] },
                        { name: "AutoCAD", imports: ["Me.Skills.Floor Plan Drawing,","Me.School.Associate Degree"] },
                        { name: "Processing", imports: ["Me.Artwork.Digital Art","Me.Projects.Creative Coding","Me.School.Undergraduate"] }
            ]
        },
        {
                    name: "Projects",
                    children: [
                        { name: "Social Engaged Practice", imports: ["Me.Skills.Project Management", "Me.Skills.Leadership", "Me.Skills.Communication"],
                            details:{
                                title:"QR Code",
                                description:"The project, titled Participatory Art: QR Code Room, transformed a university computer lab (M7058) into an environment entirely saturated with QR codes. The core intervention was converting all traditional text—from signs to software messages—into unique QR codes, creating an atmosphere of overwhelming visual chaos. The primary objective was to critique the societal assumption that convenience always equals accessibility , forcing participants to reflect on the autonomy, transparency, and human connection lost due to technological reliance. Participants were empowered as co-creators, allowed to scan, create, and remove codes, thereby reconstructing the space into a collective commentary on the digital society.",
                                image:"source/10.webp",
                                relations:["Undergraduate","Teamwork"],

                            }
                         },
                        { name: "Sustainable Arduino", imports: ["Me.Tools.Arduino", "Me.Skills.Electronic Connection", "Me.Tools.C++"], 
                            details:{
                                title:"Vplant",
                                description:"Technology's dominance has led to a critical public health issue where most users significantly exceed WHO-recommended screen time limits, fostering unhealthy habits. This is particularly alarming among youth, with teenagers averaging 8.5 hours of screen time daily. This consumption forces an untenable 8-hour device, 8-hour sleep, 8-hour school allocation, critically eliminating time necessary for social interaction, physical activity, and healthy development .",
                                image:"source/17.webp",
                                relations:["C++","Undergraduate","Game Design","Leadership","Arduino","AI Use","Digital Art"],
                                link:"https://www.youtube.com/watch?v=LJIILJjTy7U"
                            }
                        },
                        { name: "Creative Coding", imports: ["Me.Tools.JavaScript", "Me.School.Undergraduate"],
                            details:{
                                title:"Super Torus",
                                description:"This Torus Audio Reactive Visualizer is a Processing project dedicated to real-time audiovisual synthesis, treating the torus (a geometric shape) as a dynamic visual metaphor for sound. The visualizer is technically driven by audio input amplitude and frequency, which directly control the rotational speed of the torus—making the object spin faster with increasing musical intensity. Furthermore, the visualizer allows for user interaction to modify parameters like the color palette or geometric complexity in real-time, resulting in a unique, collaborative experience between the user, the code, and the music.",
                                image:"source/16.webp",
                                relations:["Programming","Java Script","Undergraduate","Digital Art","Processing"],
                                link:"https://www.youtube.com/watch?v=O5mJh_4uLhA"
                            }
                        },
                        { name: "Personal Website", imports: ["Me.Tools.GitHub", "Me.Tools.VS Code", "Me.Skills.UI/UX Design"],
                            details:{
                                title:"Personal Website",
                                description:"I am a Hong Kong-based creative media artist dedicated to the synthesis of technical logic and critical aesthetics. My practice is founded on an interdisciplinary approach, merging the analytical precision developed through my engineering background with the conceptual depth required for contemporary art. I explore media such as digital art, interactive physical computing, and narrative visualization to expose and critique the social impact of technology.",
                                image:"source/15.webp",
                                relations:["Programming","VS Code","Undergraduate","GitHub","JavaScript","UI/UX Design","AI Use"],
                                link:"https://leunghungcheung.github.io/WEB/index.html"
                            }
                         },
                        { name: "Art Game", imports: ["Me.Artwork.Art Game", "Me.Tools.C#"],
                            details:{
                                title:"Apple & Orange",
                                description: "A deceptively simple fruit-sorting game coded in C# and Unity. In 'Chromatic Sort,' apples appear orange and oranges glow red, forcing players to override visual instincts with critical logic. This project utilizes game mechanics to critique the phenomenon of blind conformity in the digital age.",
                                image:"source/11.webp",
                                relations:["Game","C#","Programming","Game Design", "Gaming","VS Code","Undergraduate","Digital Art"],
                                link:"https://play.unity.com/en/games/714d196c-3f93-4985-9f51-a8c85fc18a8b/apple-orange"
                            }
                         },
                        { name: "Photo Series", imports: ["Me.Artwork.Photography", "Me.Tools.LightRoom"],
                            details:{
                                title:"Photo Series",
                                description:"Inspired by the quiet, early morning commute, the theme explores the modern Hong Kong Sleep Deficit and digital dependence. The observation highlights a significant social issue: poor sleep health among Hongkongers. With approximately 85% of residents reporting they don't get enough sleep nightly (Xue, 2024), many rely on transportation time for crucial rest, while others remain fixed on their phones. The project will visually investigate this poor work-life balance and the quiet exhaustion found in the daily commute.",
                                image:"source/13.webp",
                                relations:["Photography","LightRoom","Undergraduate"],
                                link:"https://www.youtube.com/watch?v=nDTWFwrnCgM"

                            }
                         }
                    ]
                },
        {
                    name: "Hobbies",
                    children: [
                        { name: "Reading", imports: ["Me.School.Undergraduate"],
                            details: { 
                                title: "Reading", 
                                description: "A fundamental practice accelerated during my time at CityU. Reading expands my intellectual view, providing me with foundational knowledge across various disciplines and sharpening my capacity for critical analysis of the world and contemporary media theory." 

                            }
                        },
                        { name: "Gaming", imports: ["Me.Artwork.Art Game"],
                            details: { 
                                title: "Gaming", 
                                description: "Beyond entertainment, gaming serves as a medium for conceptual experimentation. My interest lies in transposing commercial game mechanics into Art Games, focusing on narrative, aesthetic, and deeper meaning rather than traditional gameplay.", 
                                relations: ["Game","Art Game"] 

                            }
                        },
                        { name: "Hiking", imports: ["Me.Artwork.Photography"],
                            details: { 
                                title: "Hiking", 
                                description: "A vital practice for maintaining physical and mental health balance. Hiking provides extensive exposure to natural environments and diverse landscapes, which directly informs my perspective, composition skills, and subject matter for landscape photography.", 
                                relations: ["Photography"] 
                            }
                         }, 
                        { name: "Drawing", imports: ["Me.Artwork.Painting"],
                            details: { 
                                title: "Drawing", 
                                description: "Freehand drawing serves as my rapid prototyping tool for visualizing concepts before digital execution. This practice quickly translates complex thoughts into technical schematics, wireframes, and initial compositions for design and artwork.", 
                                relations: ["Painting","AutoCAD","Floor Plan Drawing"] 
                            }
                         },
                        { name: "Crafting", imports: ["Me.Artwork.Sculpture"],
                            details: { 
                                title: "Crafting", 
                                description: "Rooted in a childhood fascination with constructing and deconstructing objects, crafting developed an intuitive understanding of structural physics, material science, and spatial reasoning. This manual expertise is directly beneficial to my Sculpture and Physical Computing projects.", 
                                relations: ["Sculpture"] 

                            }
                         },
                        { name: "Guitar", imports: ["Me.Experience.Music Company (JLMusic)"],
                            details: { 
                                title: "Guitar", 
                                description: "Although limited to fundamental chords, my basic knowledge of guitar facilitates communication on music theory and rhythm. This provides synergy when working on music video production and has expanded my opportunities for professional collaboration within the music industry.", 
                                relations: ["Music Company (JLMusic)"] 
                            }
                         }
                    ]
                },
        {
                    name: "Languages",
                    children: [
                        { name: "English", imports: ["Me.Skills.Communication"],
                            details:{
                                title:"English",
                                description:"My second language, serving as the primary medium for academic research and professional communication. I utilize English to access global design trends, read technical documentation, and articulate creative concepts to an international audience.",
                                relations: ["Cantonese", "Chinese"]
                            }
                         },
                        { name: "Cantonese", imports: ["Me.Skills.Communication"],
                            details:{
                                title:"Cantonese",
                                description:"My native language and the foundation of my cultural identity. Cantonese shapes my initial creative thinking and allows for the expression of nuanced, localized narratives that connect deeply with the Hong Kong community.",
                                relations: ["Chinese", "English"]
                            }
                        },
                        { name: "Chinese", imports: ["Me.Skills.Communication"],
                            details:{
                                title:"Chinese",
                                description:"Working proficiency in Mandarin (Putonghua). This capability expands my professional reach beyond Hong Kong, facilitating communication with the broader Greater China market and enabling cross-border creative collaborations.",
                                relations: ["Cantonese", "English"]
                            }
                         }
                    ]
                }
    ]
};

function id(node) {
    return `${node.parent ? id(node.parent) + "." : ""}${node.data.name}`;
}

function bilink(root) {
    const map = new Map(root.leaves().map(d => [id(d), d]));
    for (const d of root.leaves()) {
        d.incoming = [];
        d.outgoing = (d.data.imports || []).map(i => {
            const targetNode = map.get(i);
            if (!targetNode) console.warn(`Missing link target: ${i} from ${d.data.name}`);
            return targetNode ? [d, targetNode] : null;
        }).filter(Boolean);
    }
    for (const d of root.leaves()) {
        for (const o of d.outgoing) {
            if (o[1]) o[1].incoming.push(o);
        }
    }
    return root;
}


const colorin = "blue";
const colorout = "gold";
const colornone = "#e8e8e8";
const width = 1000;
const radius = width / 2;
let selectedNode = null;


const visPlot = document.getElementById('vis-plot');
const detailPage = document.getElementById('detail-page');
const detailCloseBtn = document.getElementById('detail-close-btn');
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');
const moreInfoBtn = document.getElementById('more-info-btn');
const detailCategory = document.getElementById('detail-category');
const detailImage = document.getElementById('detail-image');
const relationsWrapper = document.getElementById('detail-relations-wrapper');
const relationsList = document.getElementById('relations-list');
const detailVisitBtn = document.getElementById('detail-visit-btn'); 

const tree = d3.cluster().size([2 * Math.PI, radius - 120]);
const root = tree(bilink(d3.hierarchy(data)
    .sort((a, b) => d3.ascending(a.height, b.height) || d3.ascending(a.data.name, b.data.name))));

const svg = d3.select("#vis-plot").append("svg")
    .attr("width", "100%").attr("height", "100%")
    .attr("viewBox", [-width / 2, -width / 2, width, width])
    .attr("style", "font: 11px sans-serif;")
    .on("click", resetView);

const mainGroup = svg.append("g").attr("transform", "scale(1) translate(0, -50)");

const line = d3.lineRadial()
    .curve(d3.curveBundle.beta(0.85))
    .radius(d => d.y).angle(d => d.x);

const link = mainGroup.append("g")
    .attr("stroke", colornone).attr("fill", "none")
    .selectAll()
    .data(root.leaves().flatMap(leaf => leaf.outgoing))
    .join("path")
    .style("mix-blend-mode", "multiply")
    .attr("d", ([i, o]) => o ? line(i.path(o)) : null)
    .each(function(d) { if (d) d.path = this; });

const node = mainGroup.append("g")
    .selectAll()
    .data(root.leaves())
    .join("g")
    .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
    .append("text")
    .attr("dy", "0.31em")
    .attr("x", d => d.x < Math.PI ? 6 : -6)
    .attr("text-anchor", d => d.x < Math.PI ? "start" : "end")
    .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
    .text(d => d.data.name)
    .each(function(d) { d.text = this; })
    .on("mouseover", overed)
    .on("mouseout", outed)
    .on("click", clicked)
    .call(text => text.append("title").text(d => `${d.data.name}\nOutgoing: ${d.outgoing.length}\nIncoming: ${d.incoming.length}`));

// --- 5. INTERACTION ---

function overed(event, d) {
    if (selectedNode) return;
    link.style("mix-blend-mode", null);
    d3.select(d.text).attr("font-weight", "bold").attr("fill", "black");
    d3.selectAll(d.incoming.map(p => p.path)).attr("stroke", colorin).attr("stroke-width", 2).raise();
    d3.selectAll(d.incoming.map(([s]) => s.text)).attr("fill", colorin).attr("font-weight", "bold");
    d3.selectAll(d.outgoing.map(p => p.path)).attr("stroke", colorout).attr("stroke-width", 2).raise();
    d3.selectAll(d.outgoing.map(([, t]) => t.text)).attr("fill", colorout).attr("font-weight", "bold");
}

function outed(event, d) {
    if (selectedNode) return;
    link.style("mix-blend-mode", "multiply");
    d3.select(d.text).attr("font-weight", null).attr("fill", null);
    d3.selectAll(d.incoming.map(p => p.path)).attr("stroke", null).attr("stroke-width", null);
    d3.selectAll(d.incoming.map(([s]) => s.text)).attr("fill", null).attr("font-weight", null);
    d3.selectAll(d.outgoing.map(p => p.path)).attr("stroke", null).attr("stroke-width", null);
    d3.selectAll(d.outgoing.map(([, t]) => t.text)).attr("fill", null).attr("font-weight", null);
}


function openDetailPage(d) {
    const parentName = d.parent ? d.parent.data.name : "";
    let categoryLabel = "OTHERS";
    switch (parentName) {
        case "Artwork": categoryLabel = "PROJECT"; break;
        case "School": categoryLabel = "SCHOOLING"; break;
        case "Skills": 
        case "Tools": categoryLabel = "SKILLS"; break;
        case "Experience": categoryLabel = "WORK"; break;
        default: categoryLabel = "OTHERS";
    }

    // set text content
    if(detailCategory) detailCategory.textContent = categoryLabel;
    detailTitle.textContent = d.data.details.title;
    detailDescription.textContent = d.data.details.description;

    // set image
    if (d.data.details.image) {
        detailImage.src = d.data.details.image;
        detailImage.style.display = "block";
    } else {
        detailImage.style.display = "none";
        detailImage.src = "";
    }

    // set visit button
    if (d.data.details.link) {
        detailVisitBtn.href = d.data.details.link;
        detailVisitBtn.style.display = "block";
    } else {
        detailVisitBtn.href = "#";
        detailVisitBtn.style.display = "none";
    }

    // relations buttons
    relationsList.innerHTML = ''; 
    if (d.data.details.relations && d.data.details.relations.length > 0) {
        relationsWrapper.style.display = 'block';
        d.data.details.relations.forEach(relName => {
            const targetNode = root.descendants().find(n => n.data.name === relName);
            if (targetNode) {
                const btn = document.createElement('button');
                btn.className = 'relation-btn';
                btn.innerHTML = `<span>Related</span>${relName}`;
                btn.onclick = (clickEvent) => {
                    clicked(clickEvent, targetNode);
                    openDetailPage(targetNode);
                };
                relationsList.appendChild(btn);
            }
        });
    } else {
        relationsWrapper.style.display = 'none';
    }

    detailPage.style.display = 'flex';
    moreInfoBtn.style.display = 'none'; 
    document.body.classList.add('overlay-open');
}

function clicked(event, d) {
    event.stopPropagation(); 

    if (selectedNode === d) {
        return resetView();
    }
    selectedNode = d;
    moreInfoBtn.style.display = 'none';

    link.style("mix-blend-mode", null).attr("stroke-opacity", 0.1).attr("stroke", colornone).attr("stroke-width", 1);
    node.attr("opacity", 0.2).attr("fill", null).attr("font-weight", null);

    d3.select(d.text).attr("font-weight", "bold").attr("fill", "black").attr("opacity", 1);
    
    d3.selectAll(d.incoming.map(p => p.path)).attr("stroke", colorin).attr("stroke-width", 2).attr("stroke-opacity", 1).raise();
    d3.selectAll(d.incoming.map(([s]) => s.text)).attr("fill", colorin).attr("font-weight", "bold").attr("opacity", 1);
    
    d3.selectAll(d.outgoing.map(p => p.path)).attr("stroke", colorout).attr("stroke-width", 2).attr("stroke-opacity", 1).raise();
    d3.selectAll(d.outgoing.map(([, t]) => t.text)).attr("fill", colorout).attr("font-weight", "bold").attr("opacity", 1);

    if (d.data.details) {
        const plotRect = visPlot.getBoundingClientRect();
        const x = event.clientX - plotRect.left + 15;
        const y = event.clientY - plotRect.top;

        moreInfoBtn.style.left = `${x}px`;
        moreInfoBtn.style.top = `${y}px`;
        moreInfoBtn.style.display = 'block';

        moreInfoBtn.onclick = (e) => {
            e.stopPropagation();
            openDetailPage(d);
        };
    }
}

function resetView() {
    selectedNode = null;
    link.style("mix-blend-mode", "multiply").attr("stroke", null).attr("stroke-width", null).attr("stroke-opacity", 1);
    node.attr("opacity", 1).attr("fill", null).attr("font-weight", null);
    moreInfoBtn.style.display = 'none';
    detailPage.style.display = 'none';
    document.body.classList.remove('overlay-open');
}

detailCloseBtn.addEventListener('click', () => {
    detailPage.style.display = 'none';
    document.body.classList.remove('overlay-open');
});