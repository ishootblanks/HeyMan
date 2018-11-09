
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiClientServiceService } from '../api-client-service.service';


@Component({
  selector: 'app-uber',
  templateUrl: './uber.component.html',
  styleUrls: ['./uber.component.css']
})
export class UberComponent implements OnInit {

  imgLink: string ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUBAQH///8AAAB4eHjy8vJra2uHh4egoKBoaGgsLCy8vLzHx8ecnJzR0dGWlpbMzMwhISH5+fnp6em3t7fa2toYGBhAQEA1NTV9fX1VVVWrq6tNTU1vb28nJydgYGCSkpLj4+NGRkYRERFbW1sxMTFlROx6AAADn0lEQVR4nO3Z2XaqMABGYYkWrTM41KGO7fs/42lNghmRY+PSi/1d0jTkJyEDtloAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHkpIkcsidM0Sr7K+cNPK/ixSeeimQqzfTL39dhdqV01AYRTaWpW97dff54eEFHnR+VE6VYv15XLn3WjTrsg8xXy4cP/1PCk7QUVelRSt0q8sK2df6SOK7qXujtvMN3lPM+Eq0KZfY2csDyPlsuws3Po9x2XqiKo9XsKenzCPNXxmv2DdWLm+UVk7+hj2iSOmSJi1myXcNkqY7dJG/O+E5aAyOqo2Ha0JSSUcuDbCS9gZXc07flc/JWHfnBy3mVfMeLNrFgOVcGL9uaemsrSzzR0JjVJ65K6DCetuKxOOrMrEp6yt9zoJW2Iqi+0TJPzNKDsxf6WEIl0f/l6Vr2L3lRKeZbGPRAnLV0uo35wyMJfeNUplHx6endCwKP0XJzKXNkm4kDdtPzfhfNxVht2JLDQP7WmKw9gw/HLq1wktG3/MPyGhb+LsS4N7muXNhIveQBY9Pnk99G0WtxOO3Pprdm2fT97ThLzd3Je6ra5J2E98gEqSMLQeWorITBOwSRzwjoSjz++psvtSc4P56uiEnfz0rrXcVkcSdvrL5EfgWMLPWMLSnv7WstyXn3AZXyuMhOVgdiFXwsEDPmOodrvDSF9eeAnts40Q88vVrpfQG5h2/SrhSj8CdeZPu+m2buXO5huva4MJW6KvHv71yn/saaqVVD8p93tRAuJDJjw4XVOqFhjX6hKO7kt4/TdxCrUjBX1isR+enmiGtxPKZXry14S6omyRPuIsUy2vmiSqD4fLGwmFPj71/55wWrUjSS7jXmqYZqOPauZrq4DWTkQlnFlT6WIkS+ahhDWfMUJnfLXybNN3oqr5Z1XbHFbtfDzQn4Ts6UevFpOr6lOUObb0atH3XQ8Nwa8YhXr3k3eimsZ8K3v2qdnTjG/saTK3e0KnJ3GQpdIenuoi5qJpQuuTcDyh0TvBhGoCr19J74x48JtzdPdP0YTFquE371Xte3jdSG0esOz/ZDxajRns/Z+Ulv6PKUU5n/WcnZbeyPmF/Zlmbv+nHkxpj8BVxlZvvOlPJoNZNz+FtpLxX83cYrt20MkcyufLJec3CjFd/V5dJf6uH25/gyKxgo2eRPi/6+4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM39A3gdLDA2bduWAAAAAElFTkSuQmCC";

  @Input() public Data;

  // get params from service
  coordinates = this.apiClientService.params.params;

  constructor(private apiClientService: ApiClientServiceService) { }


  getParams(): void {
    this.apiClientService.getEstimate(this.Data).subscribe(params => this.Data = params);
  }

  ngOnInit() {
    // this.getParams();
  }

}
