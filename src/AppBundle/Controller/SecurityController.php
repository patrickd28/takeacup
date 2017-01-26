<?php
/**
 * Created by PhpStorm.
 * User: pdube
 * Date: 16-03-15
 * Time: 07:43
 */

namespace AppBundle\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends Controller
{

    /**
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request)
    {
        $authenticationUtils = $this->get('security.authentication_utils');

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render(
            'AppBundle:security:login.html.twig',
            array(
                // last username entered by the user
                'last_username' => $lastUsername,
                'error'         => $error,
            )
        );
    }

    /**
     * @Route("/login-check", name="login_check")
     * @Method("POST")
     */
    public function signinCheckAction()
    {
        // this action is never executed
    }

    /**
     * @Route("/sign-out", name="signout")
     * @Method("GET")
     */
    public function signinOutAction()
    {
        // this action is never executed
    }

    /**
     * @Route("/login-facebook", name="login_facebook")
     * @Method("GET")
     */
    public function loginFacebookAction()
    {
        return $this->render('AppBundle:security:login_facebook.html.twig');
    }

}
