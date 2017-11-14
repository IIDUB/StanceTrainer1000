using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Some of the code in this class has been sourced from this link
// https://answers.unity.com/questions/971938/respawn-from-falling-off-world.html
// Hunter

public class spawn : MonoBehaviour {

    // sets where you want the object to respawn when it touches the threshold
    public float threshold;

    void FixedUpdate()
    {
        // tells the object where to spawn if it reaches the threshold
        if(transform.position.y < threshold)
        {
            transform.position = new Vector3(0, 4, 2);
        }
    }

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
