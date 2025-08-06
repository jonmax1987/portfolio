import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import {
    ContactSectionStyled,
    Container,
    Content,
    Title,
    Subtitle,
    ContactGrid,
    ContactCard,
    ContactIcon,
    ContactInfo,
    ContactTitle,
    ContactDetail,
    FormContainer,
    Form,
    FormGroup,
    Label,
    Input,
    TextArea,
    SubmitButton,
    SocialLinks,
    SocialLink
} from './ContactSection.styled';

/**
 * Contact Section Component
 * Features: Contact information, contact form, and social links
 */
const ContactSection = ({
    id = 'contact',
    title = 'Get In Touch',
    subtitle = 'Ready to start your next project? Let\'s talk!',
    email = 'jonathan.max@email.com',
    phone = '+972-50-123-4567',
    location = 'Israel',
    socialLinks = {},
    className = ''
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '' });
            alert('Message sent successfully!');
        }, 1000);
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: 'Email',
            detail: email,
            href: `mailto:${email}`
        },
        {
            icon: FaPhone,
            title: 'Phone',
            detail: phone,
            href: `tel:${phone}`
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Location',
            detail: location,
            href: null
        }
    ];

    const defaultSocialLinks = [
        {
            icon: FaLinkedin,
            href: socialLinks.linkedin || 'https://linkedin.com/in/jonathanmax',
            label: 'LinkedIn'
        },
        {
            icon: FaGithub,
            href: socialLinks.github || 'https://github.com/jonathanmax',
            label: 'GitHub'
        }
    ];

    return (
        <ContactSectionStyled id={id} className={`contact-section ${className}`}>
            <Container>
                <Content>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>

                    <ContactGrid>
                        {/* Contact Information Cards */}
                        {contactInfo.map((contact, index) => (
                            <ContactCard 
                                key={contact.title}
                                as={contact.href ? 'a' : 'div'}
                                href={contact.href}
                                $delay={index * 0.1}
                            >
                                <ContactIcon>
                                    <contact.icon />
                                </ContactIcon>
                                <ContactInfo>
                                    <ContactTitle>{contact.title}</ContactTitle>
                                    <ContactDetail>{contact.detail}</ContactDetail>
                                </ContactInfo>
                            </ContactCard>
                        ))}
                    </ContactGrid>

                    {/* Contact Form */}
                    <FormContainer>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your full name"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="message">Message</Label>
                                <TextArea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                />
                            </FormGroup>

                            <SubmitButton 
                                type="submit" 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </SubmitButton>
                        </Form>
                    </FormContainer>

                    {/* Social Links */}
                    <SocialLinks>
                        {defaultSocialLinks.map((social, index) => (
                            <SocialLink
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                $delay={index * 0.1}
                            >
                                <social.icon />
                            </SocialLink>
                        ))}
                    </SocialLinks>
                </Content>
            </Container>
        </ContactSectionStyled>
    );
};

ContactSection.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string,
    socialLinks: PropTypes.object,
    className: PropTypes.string,
};

export default ContactSection;
