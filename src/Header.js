import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import './Header.css';
import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className="header">
           
           <div className="header__left">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAaVBMVEUoZ7L///8RX68eYrDW4e9DebuBoM32+v0OXa6+zuV2m8vl7fVjjcQjZbGnvNzr8PcAWazz9vpVhMDg6PMzb7aSrtTM2etMfr1+n81njsTG0+cwbLRsk8ehuNlZh8Gvwt6NqNGYsNWzxuD/UJisAAAGJUlEQVR4nO3d23aqMBAG4BxEYnUKKsVqPeH7P+QGq7VWYAYPKxP2/DftDci3ggnmhNKXJKNiuYgCz3a4m+vfUT//5UvrLIAKPGCNW+xqhONtyfN9dc8KGDX6KzwY6/uynhpI366Fe9eb8jvHLOJfwo/U9/W8IDaKf4Qj5/tqXhKzPguTfn0FL0l3J+G6r0Klpkfh3Pi+jpfFFEfhsL9FqKpaRsVZ7xqKS1xeCud9bCnOsftSeOjv17B8tFmUwqLPX8Pqi6g++ywEiLXqdVUqwvAjwvAjwvAjwvAjwvAjwvBzjxCOedEFPT1dhWCci7bb7SxzLoyS7ya0JivyU0/5dLVXJoCS7CIEsx5cDcvp0Yx/V3kHoYv++I5Gxf1epQtdcesrE6+ZFyNVCG5VCyxT8CZShTZvAmq9YU0kCt2oGaj1B2ciTeg+2oBabxlXNyRh1W3cmoRxu0gSuppm4jrvfO9TitAuMaDWX2xLkSJM0SIsC5Ht4A5BCBkO1AnbuUYE4XGcGA3b6pQgdC2N/SUF19sUFwJMKcKca21KEJ7mFSFhO52DIMSa++9MwxXaSd+F0H8h7S5NwhWqjFTTDAIWmoQiZDt9k9LiHyhCtv3mBKH9pAijgJ9LwRCAA643KenXE+U25TutiiKECAUmfGc3knoxzDsmZDyLmtYTBUiDsWL7LaT2Jtr255qE82gisUfYvLUJI773KL1X3zUT4xlnIH3sya2bblHWJdhldM1E8zrgCHgDu4yQQjq8qVLnE74N4SmdxvGNHV51Dq8mASxZ7DZTAaxTn7t8Pp0OVu9rE8RsjO7zaaxxaZo6Z9j2cl9H5kSFHxGGHxGGHxGGHxF6CZymIVczkR9+cGInrHZega9sVmWRZV/KOvPQAyIvIRgXDQ+D5DIWFCfzweFjmaV3K4k9UQZJ7acjx9x8qHWL3bihp2R8qH7K3IMkCe3ne3t2s5rPhqL9oP3Vp4JR+9pOhItytbR3TCynzWtrnD17ztvtGcAinaxXQx3WbAhTPsaF62ykCVtnlzYKG+64GiG4IWkYtizIfdduBRZCUzdHvinzjusDGAjBkQYoL9l02u/JvxAMaYz5d/IuzwHehYBPz73NuMMqD99CyNqbiIYk9P1mPAvB3gUsS5E83OVZeM8t+h3yXEi/QvzEzaFOnvcqxJZxtIc4K9mnMKXNmGtKQmsWvQrvrGXOoU289ijMi8eAOiYt8vAofDykRR5BC2NKoxi0UH8QCjFs4Zgwxh62UE8I63vDFu7w2zRwIeEBPHChruvk65cQf64JXYj/iApdqNH2gpUwGeSrVd7teRxdI8BFGOf7hU1dlTSNhjmxg1jrPdYiMhFust/vZADrsh1+0DFoi8hCeLgdcQEX0Q5HF3pwEL7V/li3bZuNXIKumWMgnDVcIwClzkF36vYvXDcWAnxRjseearwL2zoFzZBwAmwxi2/hOG0pAjCE+xRfDuNX2F4CZo+fYYNUNZ6FyCp+sPjQN7ahvGfh45+MPnt7FmJVvW1djXQM1uT7FebYLwMAXMj6LsV7A/HadMy6LsWXR+NTeXgL8SFAs8HOMUU6o7wKCQvA8aXyWNe+VyFhHwZ8nzHWQuxxpDrLLGghZc9NdKU8ayFljXuGPrchE6S8CvEO6/9AiG4FwFoYE/ZDCVtI2fFFhCIUoQhFKEIRilCEIhShCEUoQhGewrmv7SlC1r36TxGy7i8VoQhFKEIRilCEIhShCEUoQhGKUIQiFKEIRShCEYpQhCIUoQhFKEIRehC+ZD9vohBdUfIMISyWk9Yss7rDtu0HTSaUDY8BPcsz9lQoywPJfUcRgPhZsJPwejfCKyLC8CPC8CPC8CPC8CPC8CPC8CPC8HMUfvZeiO5yGnJAaa1I7xgINZCVQvJbaUJMteWbwpadBB13KIV62eMvoptWwlV/b9PjvoSK1DcbaI7vzFKEDQxDzfc2tqVQD/vZYJy2Iq6EetHHygbM4CKMo/6VIpjTluDqe5Rq0unllwHEwvnNfOr0d3PP63bZxrq3n9cPnIV6PHTGPv6ub/8BMOn216b16vLvdDfBX1HNPhYWxdXetUpfZTwIPfO/b8f4I+xh/gHItLR0trytdAAAAABJRU5ErkJggg==" alt="linkedin" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
           </div>

           <div className="header__right">
               <HeaderOption Icon={HomeIcon} title = "Home"/>
               <HeaderOption Icon={SupervisorAccountIcon} title = "My Network"/>
               <HeaderOption Icon={BusinessCenterIcon} title = "Jobs"/>
               <HeaderOption Icon={ChatIcon} title = "Messaging"/>
               <HeaderOption Icon={NotificationsIcon} title = "Notifications"/>
               <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5103AQG0UVacIGlYyQ/profile-displayphoto-shrink_100_100/0/1570377660229?e=1632355200&v=beta&t=jPiWesSIv6xIv8Vuv60JLZ8QO94HJfkg0VzTCU4lilI" title="Me"/>

           </div>
        </div>
    )
}

export default Header
