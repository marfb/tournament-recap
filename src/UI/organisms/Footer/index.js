import React from 'react';
import Logo from 'assets/Logo';
import styles from './styles';

const Footer = () => (
	<styles.FooterContainer>
		<styles.FooterRow>
			<styles.FooterWrapper>
				<styles.LogoWrapper>
					<Logo />
				</styles.LogoWrapper>
				<styles.CopyWrapper>
					<styles.Copy>MFB © 2022</styles.Copy>
				</styles.CopyWrapper>
				<styles.SocialWrapper>
					<styles.SocialLink>
						<styles.SocialIcon iconName="FiTwitter" />
					</styles.SocialLink>
					<styles.SocialLink>
						<styles.SocialIcon iconName="FiGithub" />
					</styles.SocialLink>
				</styles.SocialWrapper>
			</styles.FooterWrapper>
		</styles.FooterRow>
	</styles.FooterContainer>
);

export default Footer;
