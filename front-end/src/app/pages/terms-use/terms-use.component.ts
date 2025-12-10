import { Component } from '@angular/core';
import { TermsUseSectionComponent } from "./components/terms-use-section/terms-use-section.component";
import { HeaderComponent } from "../../components/header/header.component";
import { TermsLgpdSectionComponent } from "./components/terms-lgpd-section/terms-lgpd-section.component";
import { TermsPrivacySectionComponent } from "./components/terms-privacy-section/terms-privacy-section.component";
import { TermsContactSectionComponent } from "./components/terms-contact-section/terms-contact-section.component";

@Component({
  selector: 'app-terms-use',
  imports: [TermsUseSectionComponent, HeaderComponent, TermsLgpdSectionComponent, TermsPrivacySectionComponent, TermsContactSectionComponent],
  templateUrl: './terms-use.component.html',
  styleUrl: './terms-use.component.scss'
})
export class TermsUseComponent {
  public terms : string = "terms";
}
