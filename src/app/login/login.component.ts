import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { LoginDTO } from 'src/dto/logindto';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';
import { UserDTO } from 'src/dto/userdto';
import { Usertype } from 'src/dto/usertype';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDTO: LoginDTO;
  userDTO: UserDTO = new UserDTO();

  userChoice: string = 'loginUser';

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(f: NgForm): void {
    this.loginDTO = new LoginDTO(f.value.username, f.value.password);

    this.service.login(this.loginDTO).subscribe((user) => {

      if (user != null) {
        localStorage.setItem('currentUser', JSON.stringify(user));

        switch (user.usertype.toString()) {
          case 'ADMIN': {
            this.router.navigate(['/admin-dashboard']);
            break;
          }
          case 'USER': {
            this.router.navigate(['/user-dashboard']);
            break;
          }
          default:
            this.router.navigate(['/login']);
        }
      }

      else {
        alert(`Hey ${f.value.username}, you don't exist!`);
      }
    });
  }

  register(userDTO: UserDTO) {
    
    userDTO.usertype=1;
    this.userDTO = userDTO;
    this.service.insert(this.userDTO).toPromise();    // .subscribe(us => us);

    alert(`Thank you for registering, ${userDTO.username}`);
  }

  showForm(formToShow: string) {
    this.userChoice = formToShow;
  }

}
