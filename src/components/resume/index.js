import React from 'react'
import { Font, Link, Text, View, Page, Document, StyleSheet } from '@react-pdf/renderer';
// [PDFViewer] is from '@react-pdf/renderer'

import {getTotalExperience, getMonthAndYear} from '../../util';
import '../../index.css';

Font.register({
    family: 'Open Sans',
    fonts: [
      { src: '/my-profile/assets/fonts/Open_Sans/static/OpenSans-Regular.ttf', fontWeight: 'normal' },
      { src: '/my-profile/assets/fonts/Open_Sans/static/OpenSans-Italic.ttf', fontStyle: 'italic' },
      { src: '/my-profile/assets/fonts/Open_Sans/static/OpenSans-Bold.ttf', fontWeight: 'bold' },
    ],
});

function Resume({profileData}){

    const styles = StyleSheet.create({
        page: {
            fontSize: 12, 
            paddingTop: 20,
            paddingBottom:20,
            paddingLeft: 40,
            paddingRight: 40,
            lineHeight: 1.5,
            flexDirection: 'column',
            fontFamily: 'Open Sans'
        },

        header: {
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent: 'space-between',
            marginBottom: 15
        },

        sectionHeader : {
            fontWeight: 'bold',
            fontSize: 13,
            margin: '5 0'
        },

        sectionContent: {
            marginLeft: 15
        },

        h1: {fontWeight: 'bold',fontSize: 24},

        contact: {
            display:'flex', 
            alignItems:'flex-end',
        },

        link: {textDecoration: 'none'},

        introduction: {
            borderBottom: '1px solid black',
            marginBottom: 5
        },

        skills: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-around'
        },

        experience: {
            marginBottom: 5
        },

        projectContainer:{
            marginTop: 5,
        },

        organization: {
            display:'flex',
            flexDirection: 'row',
            justifyContent:'space-between'
        },

        organizationName: {
            fontWeight: 'bold',
            color: '#1155cc'
        },

        titleInOrganization: {
            fontStyle: 'italic',
            fontWeight: 'medium'
        },

        experienceTimeLine: {
        },

        displayInRow: {
            display: 'flex',
            flexDirection: 'row'
        },

        projectSubHeadings: {
            fontWeight: 'demibold'
        },

        projectName:{
            color: '#e91d63'
        },

        projectContents: {
            marginTop: 5
        },

        collegeName: {
            color: '#e91d63'
        },

        collegeCourse: {
            fontStyle: 'italic'
        }

    });



    return (
        <>
        // Use [PDFViewer] to  render the PDF in development mode. This path is served on [my-profile/resume]
        { /* <PDFViewer width="1000" height="650" className="app"> */}
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.header}>
                        <View style={styles.h1}>
                            <Text>{profileData.name}</Text>
                        </View>
                        <View style={styles.contact}>
                            <Text>Hyderabad, India</Text>
                            <Text><Link style={styles.link} href={profileData.linkedInUrl}>{profileData.linkedInDisplayUrl}</Link></Text>
                            <Text><Link style={styles.link} href={`callto:${profileData.mobile}`}>{profileData.mobile}</Link></Text>
                            <Text><Link style={styles.link} href={`mailto:${profileData.email}`}>{profileData.email}</Link></Text>
                        </View>
                    </View>
                    <View style={styles.introduction}>
                        <Text>Web application Developer with {getTotalExperience(new Date(profileData.dateOfJoiningIT))}+ years of experience, skilled in all stages of advanced web development. Proficient in user interface development, testing, debugging, and equipped with a diverse skill-set. Has ability to self-manage and collaborate effectively in an agile team setting.</Text>
                    </View>

                    <View>
                        <Text style={styles.sectionHeader}>SKILLS</Text>
                    </View>
                    <View style={[styles.skills, styles.sectionContent]}>
                        <View>
                            {profileData.skills?.map((skill, index) => index < Math.ceil(profileData.skills.length/2) ? <Text key={skill}>- {skill}</Text> : null)}
                        </View>
                        <View>
                            {profileData.skills?.map((skill, index) => index >= Math.ceil(profileData.skills.length/2) ? <Text key={skill}>- {skill}</Text> : null)}
                        </View>
                    </View>

                    <View>
                        <Text style={styles.sectionHeader}>CERTIFICATIONS</Text>
                    </View>
                    <View style={styles.sectionContent}>
                        {profileData.certifications?.map(certification =>
                            <Text key={certification.name}>
                                - <Link style={styles.link} href={certification.certificateUrl}>{certification.name}</Link> from {certification.issuedBy}
                            </Text>
                        )}
                    </View>

                    <View>
                        <Text style={styles.sectionHeader}>EXPERIENCE</Text>
                    </View>
                    {profileData.experience?.map(experience=><View 
                        key={experience.startDate}
                        style={[styles.sectionContent, styles.experience]}>
                        <View style={styles.organization}>
                            <Text style={styles.organizationName}>{experience.organization}, {experience.location} 
                                <Text style={styles.titleInOrganization}>{` as ${experience.title}`}</Text>
                            </Text>
                            <Text style={styles.experienceTimeLine}>
                               [ {getMonthAndYear(experience.startDate)} - {experience.endDate ? getMonthAndYear(experience.endDate): 'Present'} ]
                            </Text>
                        </View>
                        {experience.projects.map(project=><View key={project.name} style={styles.projectContainer}>
                            <>
                                <View style={[styles.displayInRow, styles.projectContents]}>
                                    <Text style={styles.projectSubHeadings}>Project: </Text>
                                    <Text style={styles.projectName}>{project.name}</Text>
                                </View>
                                <View style={styles.projectContents}>
                                    <Text>{project.description}</Text>
                                </View>
                                <View style={[styles.displayInRow, styles.projectContents]}> 
                                    <Text style={styles.projectSubHeadings}>Tech Stack: </Text>
                                    <Text>{project.techstack.join(', ')}.</Text>
                                </View>
                                <View style={styles.projectContents}>
                                    <Text style={styles.projectSubHeadings}>Responsibilities:</Text>
                                    {project.rolesAndResponsibilities.map(responsibility => <Text key={responsibility}>
                                        - {responsibility}
                                    </Text>)}
                                </View>
                            </>
                        </View>)}
                    </View>)}

                    <View>
                        <Text style={styles.sectionHeader}>EDUCATION</Text>
                    </View>
                    {profileData.education?.map(education=><View key={education.course} style={styles.sectionContent}>
                        <View style={styles.displayInRow}>
                            <Text style={styles.collegeName}>{education.college}, {education.place} - </Text>
                            <Text style={styles.collegeCourse}>{education.course}, {education.timePeriod}</Text>
                        </View>
                    </View>)}
   
                    <View>
                        <Text style={styles.sectionHeader}>AWARDS</Text>
                    </View>
                    {profileData.awards?.map(award=><View key={award} style={styles.sectionContent}>
                        <Text>- {award}</Text>
                    </View>)}
                </Page> 
            </Document>
        {/*< /PDFViewer> */}
        </>
    )
}   
export default Resume;