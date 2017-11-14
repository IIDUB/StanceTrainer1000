using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

// The code in this script was sourced from this youtube tutorial on switching scenes via button click
// https://www.youtube.com/watch?v=FSt5xrFHaFU
// -Darrell

public class LoadScene : MonoBehaviour {

	public void SceneLoader(int SceneIndex)
    {
        SceneManager.LoadScene(SceneIndex);
    }
}
