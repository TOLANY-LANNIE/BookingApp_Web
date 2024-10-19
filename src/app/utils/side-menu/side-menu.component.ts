import { Component, signal, Input, computed, inject } from '@angular/core';
import { GreetingService } from '../../services/greeting/greeting.service';

export type MenuItem ={
  icon:string;
  label:string;
  route?: string;
  role:string;

}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  dynamicGreeting: string;
  currentHour = new Date;
  userName: string;
  userProfile: string;
  
  constructor(
    private greetingService:GreetingService
  ){
    this.dynamicGreeting = this.greetingService.getDynamicGreeting( this.currentHour);
    const user = sessionStorage.getItem('user');
    if (user) {
      const userParsed = JSON.parse(user);
      this.userName = userParsed.name;
      this.userProfile = userParsed.picture;
    } else {
      this.userName = 'defaultUserName';  // Provide a default value or handle accordingly
      this.userProfile = 'defaultUserProfile';  // Provide a default value or handle accordingly
    }
  }
 /**
 * The following code defines a component class with properties and methods related to a collapsible sidenav.
 * It uses MobX signals to manage the state of the sidenavCollapsed property.
 */

  // Create a signal for managing the sidenav collapsed state
  sidenavCollapsed = signal(false)


  /**
  * Input property decorator to handle changes in the 'collapsed' input property.
  * When the 'collapsed' input changes, it updates the 'sidenavCollapsed' signal.
  * @param val - The new value of the 'collapsed' property.
  */
  @Input () set collapsed(val:boolean){
    this.sidenavCollapsed.set(val);
  };

  /**
  * A signal representing an array of menu items.
  * Each menu item has properties such as icon, label, and route.
  * Used to define the menu structure for the component.
  */
  menuItems = signal<MenuItem[]>([
    {
      icon:'dashboard',
      label:'Dashboard',
      route:'dashboard',
      role:'Customer'
    },
    {
      icon:'bookmark',
      label:'Order List',
      route:'bookings',
      role:'Operator'
    },
    {
      icon:'list_alt',
      label:'Conflicts List',
      route:'conflict-list',
      role:'ConflictManager'
    },
    {
      icon:'exit_to_app',
      label:'Logout',
      route:'auth/login',
      role:''
    },
  
  ]);

  profilePicSize = computed(()=>this.sidenavCollapsed()?'32':'100')

  capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
}