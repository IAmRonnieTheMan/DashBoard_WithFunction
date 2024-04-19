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
                    <span class="icon"><ion-icon name="cellular-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">DETAILS</span>
                </router-link></a>
            </li>

            <li>
                <a><router-link to="/3">
                    <span class="icon"><ion-icon name="hourglass-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">CLOCK</span>
                </router-link></a>
            </li>

            <li>
                <a><router-link to="/5">
                    <span class="icon"><ion-icon name="cloud-download-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">DOWNLOAD</span>
                </router-link></a>
            </li>

            <li>
                <a><router-link to="/6">
                    <span class="icon"><ion-icon name="cloud-upload-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">UPLOAD</span>
                </router-link></a>
            </li>
            <li>
                <router-link to="/8"><a>
                    <span class="icon"><ion-icon name="person-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">LOGIN</span>
                </a></router-link>
            </li>
            <li>
                <a><router-link to="/9">
                    <span class="icon"><ion-icon name="pie-chart-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">CHART</span>
                </router-link></a>
            </li>
            <li>
                <a><router-link to="/10">
                    <span class="icon"><ion-icon name="analytics-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">DATA</span>
                </router-link></a>
            </li>
            <li>
                <a><router-link to="/12">
                    <span class="icon"><ion-icon name="wifi-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">LOADING FUNCTION</span>
                </router-link></a>
            </li>
            <li>
                <a><router-link to="/11">
                    <span class="icon"><ion-icon name="analytics-outline"></ion-icon>
                    </span> &ensp;
                    <span class="title">Test</span>
                </router-link></a>
            </li>
        </ul>
    </div>
</template>