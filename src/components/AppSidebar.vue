<template>
 <div class="navigation">
        <ul>
            <li> <!--使用ioncons第三方圖形套件, CDN import 在public/index.html-->
                <a><router-link to="#">
                    <span class="icon"><ion-icon name="walk-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">Here Is RonnieTheman</span>
                </router-link></a>
            </li>

            <li>
                <a><router-link to="/2">
                    <span class="icon"><ion-icon name="logo-chrome"></ion-icon>
                    </span> &ensp;
                    <span class="title">DETAILS</span>
                </router-link></a>
            </li>

            <li>
                <a><router-link to="/3">
                    <span class="icon"><ion-icon name="warning-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">CLOCK</span>
                </router-link></a>
            </li>

            <li>
                <a><router-link to="/5">
                    <span class="icon"><ion-icon name="earth-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">DOWNLOAD</span>
                </router-link></a>
            </li>

            <li>
                <a><router-link to="/6">
                    <span class="icon"><ion-icon name="headset-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">UPLOAD</span>
                </router-link></a>
            </li>
            <li>
                <router-link to="/8"><a>
                    <span class="icon"><ion-icon name="planet-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">LOGIN</span>
                </a></router-link>
            </li>
            <li>
                <a><router-link to="#">
                    <span class="icon"><ion-icon name="thumbs-down-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">Brand Name</span>
                </router-link></a>
            </li>
        </ul>
    </div>
</template>