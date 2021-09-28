import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  constructor(private http: HttpClient) {}

  public getAccessibility(): Observable<any>{
    return this.http.get("assets/Json-files/accessibility.json");
  }

  public getAnimation(): Observable<any>{
    return this.http.get("assets/Json-files/animation.json");
  }

  public getBooks(): Observable<any>{
    return this.http.get("assets/Json-files/books.json");
  }

  public getColor(): Observable<any>{
    return this.http.get("assets/Json-files/color.json");
  }

  public getContent(): Observable<any>{
    return this.http.get("assets/Json-files/content.json");
  }

  public getDesignSystem(): Observable<any>{
    return this.http.get("assets/Json-files/design-system.json");
  }

  public getGradient(): Observable<any>{
    return this.http.get("assets/Json-files/gradient.json");
  }

  public getIcon(): Observable<any>{
    return this.http.get("assets/Json-files/icon.json");
  }

  public getIllustration(): Observable<any>{
    return this.http.get("assets/Json-files/illustration.json");
  }

  public getMockup(): Observable<any>{
    return this.http.get("assets/Json-files/mockup.json");
  }

  public getInspiration(): Observable<any>{
    return this.http.get("assets/Json-files/inspiration.json");
  }

  public getPatternAndAbstract(): Observable<any>{
    return this.http.get("assets/Json-files/pattern-and-abstract.json");
  }

  public getImage(): Observable<any>{
    return this.http.get("assets/Json-files/stock-image.json");
  }

  public getVideo(): Observable<any>{
    return this.http.get("assets/Json-files/stock-video.json");
  }

  public getTypography(): Observable<any>{
    return this.http.get("assets/Json-files/typography.json");
  }
}
