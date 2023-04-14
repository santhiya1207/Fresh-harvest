import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {

  logsrc = "/assets/logo.png";

  isScrolled = false;

  @HostListener('window:scroll', [])
onWindowScroll() {
  this.isScrolled = window.scrollY > 0;
}
}
