import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserModel } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';
import { isNull } from 'util';
import { QueriesService } from '../services/queries.service';
import { UserdataService } from '../services/userdata.service';
import { Network } from '@ionic-native/network/ngx';
import { LoadinitdataService } from '../services/loadinitdata.service';
import { IAscensores} from '../models/IAscensores.model';
import { NetworkService } from '../services/network.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userInvalid: boolean;
  prueba: IAscensores;
  userStorage: any[] = [];
  usuario = {
    email: '',
    password: '',
    token: '',
    nombre: '',
    apellidos: '',
    cargo: '',
    cedula: '',
    codigo: ''
  };
  query = {
    campo : 'email',
    condicion: '==',
    valor: ''
  };
  disconnectSubscription: any;
  connectSubscription: any;
  conectado: any;
  desconectado: any;
  internet: boolean;
  public load: any;
  public db: any;


  constructor(private auth: AuthService,
              private router: Router,
              private loadingController: LoadingController,
              private database: QueriesService,
              private userData: UserdataService,
              private localStorage: Storage,
              private loadData: LoadinitdataService,
              private network: Network,
              private networkService: NetworkService ) { }

  ngOnInit() {

  }

  ionViewDidLeave() {
    if (this.load !== undefined) {
      this.load.unsubscribe();
    }
    if (this.db !== undefined) {
      this.db.unsubscribe();
    }
    console.log('Me fui!');
  }

  pruebas() {
    // this.load.unsubscribe();
    this.db.unsubscribe();
    console.log('Me fui!');
  }

  // ionViewDidEnter() {
  //   console.log('ionviewdidentergigit ');
  //   this.desconectado = this.network.onDisconnect().subscribe( () => {
  //     console.log('Conexión perdida');
  //     this.internet = false;

  //   });

  //   this.conectado = this.network.onConnect().subscribe( () => {
  //    console.log('conectado a internet');
  //    this.internet = true;
  //    setTimeout(() => {
  //      console.log(this.network.type);
  //     }, 3000);
  //   });

  // }

  async loadInitData() {
    const getData = await  this.localStorage.get('menuascensores');
    if ( isNull(getData) ) {
      this.load = this.loadData.downloadData().subscribe( data => {
        this.localStorage.set('menuascensores', data);
      }, ( (error) => {
        console.log('error descargando la colección de ascensores');
      }));
    }
  }

  async login(form: NgForm) {
    this.userStorage = [];
    const data = await this.localStorage.get('userAuthenticated');
    if (isNull(data)) {
      console.log('Local storage vacío');
    } else {
      console.log('Datos del storage', data);
      for ( const i of data ) {
        this.userStorage.push( i );
      }
    }
    // **NO BORRAR ESTA LINEA
    // await this.auth.insertData(collectionMock);
    if (form.valid) {
      this.localStorage.remove('userlogged');
      await this.authenticateOnline();
      }

    }

    async authenticateOnline() {

      await this.auth.login(this.usuario).then( async success => {
        console.log('autenticando en linea');
        this.usuario.token = success.user.refreshToken;
        this.query.valor = this.usuario.email;
        await this.searchInDb();
        await this.loadInitData();
      })
      .catch( async (error) => {
        const getUsers: any = await this.localStorage.get('userAuthenticated');
        if ( !isNull(getUsers) ) {
          console.log('DATOS DEL STORAGE', getUsers);
          for (const user of getUsers) {
            if (user.email === this.usuario.email) {
              this.userInvalid = false;
              console.log('El usuario coincide');
              if ( user.email === this.usuario.email && user.password === this.usuario.password ) {
                console.log('El usuario y la contraseña coinciden bienvenido');
                delete getUsers.password;
                await this.localStorage.set('userlogged', user).then( async () => {
                  console.log('user almacenado', user, ' user enviado ', this.usuario);
                  this.router.navigateByUrl('/main-menu');
                });
                await this.loadInitData();
                break;
              } else {
                console.log('El usuario y la contraseña no coinciden');
                this.userInvalid = true;
              }
            } else {
              console.log('el usuario no coincide');
              this.userInvalid = true;
            }
          }
        }
      });
    }

  async searchInDb() {
      let userData: any;
      this.db = this.database.queryCollection('users', this.query).subscribe( async (data) => {
        userData = data[0];
        this.usuario.nombre = userData.nombre;
        this.usuario.apellidos = userData.apellidos;
        this.usuario.cargo = userData.cargo;
        this.usuario.cedula = userData.cedula;
        this.usuario.codigo = userData.codigo;
        console.log('datos completos del usuario', this.usuario);
        console.log('resultado del query', userData);
        for (const userloged of this.userStorage) {
          if (userloged.email === this.usuario.email) {
            const index = this.userStorage.indexOf(userloged);
            this.userStorage.splice(index);
            break;
          }
        }
        await this.localStorage.set('userlogged', this.usuario).then( async () => {
          this.userStorage.push(this.usuario);
          await this.localStorage.set('userAuthenticated', this.userStorage);
          this.router.navigateByUrl('/main-menu');
        });

      }, ( error => {
        console.log('error buscando datos del usuario', error);
      }));
      return 0;
    }

validateClick(e: Event) {
  this.userInvalid = false;
}

async presentLoading(form: NgForm) {
  const loading = await this.loadingController.create({
    spinner: 'crescent',
    // duration: 3000,
    message: 'Iniciando sesión...',
    translucent: true,
    // cssClass: 'custom-class custom-loading'
  });
  await loading.present();

  await this.login(form);

  await loading.dismiss();

  }

}
